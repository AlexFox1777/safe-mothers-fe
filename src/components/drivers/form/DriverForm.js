import React, {useEffect} from 'react';
import {Form, Field, withFormik} from 'formik/dist/index';
import * as Yup from "yup";
import {Button, FormItems} from "../../reusableParts/form-items";
import styled from 'styled-components';
import {villages} from '../../mothers/form/lists';
import Select from "../../mothers/form/Select";
import SelectDriver from "../form/SelectDriver";
import {connect} from 'react-redux';
import {addDriver, updateDriver} from "../../../actions/driversActions";
import Banner from "../../reusableParts/banner/Banner";
import YesNoDontknowDeclin from "./YesNoDontknowDeclin";
import {choices} from "./driver-utils";
import {subcounty_code, district_code, stage_code, carrier, boda_night, reliability_code} from "./List";

import Tooltip from "../../reusableParts/Tooltip";


function DriverForm(props) {
    const ERROR_REQUIRED = "Required";
    useEffect(() => {
        const id = props.match.params.id;
        if (id) {
            const filtered_driver = props.drivers.filter(driver => `${driver.id}` === id);
            const single_driver = filtered_driver[0];
            let driver = {};
            for (let property  in single_driver) {
                if (typeof single_driver[property] === 'string' && single_driver[property].length > 0) driver[property] = single_driver[property];
                if (typeof single_driver[property] === 'number') driver[property] = single_driver[property];
            }
            props.setValues(driver);
        } else {
            props.resetForm();
        }
    }, []);

    const resetValue = (name, value, name2, value2) => {
        props.setFieldValue(name, parseInt(value));
        if (value !== value2) {
            props.setFieldValue(name2, '');
        }
    };

    return (
        <FormItems>
            <DriverFormStyle>
                <Form className="form-contents edit-form">
                    {/*NAVBAR*/}
                    <Banner back={props.match.params.id ? `/drivers/${props.match.params.id}` : '/drivers'}
                            person={props.values.driver_name} state={true} {...props} />
                    <div className="label-value inline">
                        <ul>
                            <li>*Name</li>
                            <li>District</li>
                            {props.values.district === choices.OTHER && (
                                <li>Specify District</li>
                            )}
                            <li>Subcounty</li>
                            {props.values.subcounty === choices.OTHER && (
                                <li>Specify Subcounty</li>
                            )}
                            <li>Stage</li>
                            {props.values.stage === choices.OTHER &&
                            <li>Specify Parish</li>}
                            <li>*Phone Number</li>
                            <li>Carrier</li>
                            <li>Owns another phone</li>
                            {props.values.another_phone === choices.YES &&
                            <li>Specify Carrier</li>
                            }
                            {props.values.another_phone === choices.YES &&
                            <li>Second Phone Number</li>
                            }
                            <li>Reliability</li>
                            <li>Latitude</li>
                            <li>Longitude</li>
                            <li>Owns Boda</li>
                            <li>Has Boda at Night</li>
                            <li>Transport Count</li>
                            <li>Married</li>
                            <li>Has Children</li>
                            {props.values.children === choices.YES &&
                            <li>Number of Children</li>
                            }
                            {props.values.children === choices.YES &&
                            <li>Children Details</li>
                            }
                            <li>Driver Inspiration</li>
                            <li>Delivery Story</li>
                            <li>Dream for Future</li>
                        </ul>
                        <div className="column">
                            {/*driver_name*/}
                            <label className="error-holder">
                                <Field className="driver-input" type="text" name="driver_name"/>
                                {props.touched.driver_name && props.errors.driver_name && (
                                    <p className="errormessage  errormessage_positioning">{ERROR_REQUIRED}</p>
                                )}
                            </label>
                            {/*district*/}
                            <label className="error-holder">
                                <Field
                                    component="select" className="driver-input" name="district"
                                    onChange={e => resetValue("district", e.target.value, "district_other", choices.OTHER)}>
                                    <Select list={district_code}/>
                                    <option value={choices.OTHER}>Other</option>
                                </Field>
                                {props.touched.district && props.errors.district && (
                                    <p className="errormessage">{props.errors.district}</p>
                                )}
                            </label>
                            {/*district_other*/}
                            {props.values.district === choices.OTHER && (
                                <label className="error-holder">
                                    <Field className="driver-input" type="text" name="district_other"/>
                                    {props.touched.district_other && props.errors.district_other && (
                                        <p className="errormessage">{props.errors.district_other}</p>
                                    )}
                                </label>
                            )}
                            {/*subcounty*/}
                            <label className="error-holder">
                                <Field component="select" className="driver-input" name="subcounty"
                                       onChange={e => resetValue("subcounty", e.target.value, "subcounty_other", choices.OTHER)}>
                                    <Select list={subcounty_code}/>
                                    <option value={choices.OTHER}>Other</option>
                                </Field>
                                {props.touched.subcounty && props.errors.subcounty && (
                                    <p className="errormessage">{props.errors.subcounty}</p>
                                )}
                            </label>
                            {/*subcounty_other*/}
                            {props.values.subcounty === choices.OTHER && (
                                <label className="error-holder">
                                    <Field className="driver-input" type="text" name="subcounty_other"/>
                                    {props.touched.subcounty_other && props.errors.subcounty_other && (
                                        <p className="errormessage">{props.errors.subcounty_other}</p>
                                    )}
                                </label>
                            )}
                            {/*stage*/}
                            <label className="error-holder">
                                <Field component="select" className="driver-input" name="stage"
                                       onChange={e => resetValue("stage", e.target.value, "parish_other", choices.OTHER)}>
                                    <Select list={stage_code}/>
                                    <option value={choices.OTHER}>Other</option>
                                </Field>
                                {props.touched.stage && props.errors.stage && (
                                    <p className="errormessage">{props.errors.stage}</p>
                                )}
                            </label>
                            {/*parish_other*/}
                            {props.values.stage === choices.OTHER && (
                                <label className="error-holder">
                                    <Field className="driver-input" type="text" name="parish_other"/>
                                    {props.touched.parish_other && props.errors.parish_other && (
                                        <p className="errormessage">{props.errors.parish_other}</p>
                                    )}
                                </label>
                            )}
                            {/*phone*/}
                            <label className="error-holder">
                                <Field className="driver-input" type="text" name="phone"/>
                                {props.touched.phone && props.errors.phone && (
                                    <p className="errormessage  errormessage_positioning">{ERROR_REQUIRED}</p>
                                )}
                            </label>
                            {/*carrier*/}
                            <label className="error-holder">
                                <Field component="select" className="driver-input" name="carrier"
                                       onChange={e => props.setFieldValue("carrier", e.target.value)}>
                                    <Select list={carrier}/>
                                </Field>
                                {props.touched.carrier && props.errors.carrier && (
                                    <p className="errormessage">{props.errors.carrier}</p>
                                )}
                            </label>
                            {/*another_phone*/}
                            <label className="error-holder">
                                <Field component="select" className="driver-input" name="another_phone"
                                       onChange={(e) =>{
                                           props.setFieldValue("another_phone", parseInt(e.target.value));
                                           if(parseInt(e.target.value) === choices.NO){
                                               props.setFieldValue("carrier_2", '');
                                               props.setFieldValue("phone_2", '');
                                           }
                                       }}>
                                    <YesNoDontknowDeclin state={false}/>
                                </Field>
                                {props.touched.another_phone && props.errors.another_phone && (
                                    <p className="errormessage">{props.errors.another_phone}</p>
                                )}
                            </label>
                            {/* carrier_2 */}
                            {props.values.another_phone === choices.YES && (
                                <label className="error-holder">
                                    <Field component="select" className="driver-input" name="carrier_2"
                                           onChange={e => props.setFieldValue("carrier_2", e.target.value)}>
                                        <Select list={carrier}/>
                                    </Field>
                                    {props.touched.carrier_2 && props.errors.carrier_2 && (
                                        <p className="errormessage">{props.errors.carrier_2}</p>
                                    )}
                                </label>
                            )}
                            {/*phone_2*/}
                            {props.values.another_phone === choices.YES &&
                            <label>
                                <Field className="driver-input" type="text" name="phone_2"/>
                            </label>
                            }
                            {/*reliability*/}
                            <label className="error-holder">
                                <Field component="select" className="driver-input" name="reliability"
                                       onChange={e => resetValue("reliability", e.target.value)}>
                                    <Select list={reliability_code}/>
                                </Field>
                                {props.touched.reliability && props.errors.reliability && (
                                    <p className="errormessage">{props.errors.reliability}</p>
                                )}
                            </label>
                            {/*latitude*/}
                            <label className="error-holder">
                                <Field className="driver-input" type="text" name="latitude"/>
                                {props.touched.latitude && props.errors.latitude && (
                                    <p className="errormessage  errormessage_positioning">{ERROR_REQUIRED}</p>
                                )}
                            </label>
                            {/*longitude*/}
                            <label className="error-holder">
                                <Field className="driver-input" type="text" name="longitude"/>
                                {props.touched.longitude && props.errors.longitude && (
                                    <p className="errormessage  errormessage_positioning">{ERROR_REQUIRED}</p>
                                )}
                            </label>
                            {/*own_boda*/}
                            <label className="error-holder">
                                <Field component="select" className="driver-input" name="own_boda"
                                       onChange={(e) => props.setFieldValue("own_boda", parseInt(e.target.value))}>
                                    <YesNoDontknowDeclin state={false}/>
                                </Field>
                                {props.touched.own_boda && props.errors.own_boda && (
                                    <p className="errormessage">{props.errors.own_boda}</p>
                                )}
                            </label>
                            {/*boda_night*/}
                            <label className="error-holder">
                                <Field component="select" className="driver-input" name="boda_night"
                                       onChange={e => resetValue("boda_night", e.target.value)}>
                                    <SelectDriver list={boda_night}/>
                                </Field>
                                {props.touched.boda_night && props.errors.boda_night && (
                                    <p className="errormessage">{props.errors.boda_night}</p>
                                )}
                            </label>
                            {/*transfers*/}
                            <label className="error-holder">
                                <Field className="driver-input" type="number" name="transfers"/>
                                {props.touched.transfers && props.errors.transfers && (
                                    <p className="errormessage">{props.errors.transfers}</p>
                                )}
                            </label>
                            {/*married*/}
                            <label className="error-holder">
                                <Field component="select" className="driver-input" name="married"
                                       onChange={(e) => props.setFieldValue("married", parseInt(e.target.value))}>
                                    <YesNoDontknowDeclin state={false}/>
                                </Field>
                                {props.touched.married && props.errors.married && (
                                    <p className="errormessage">{props.errors.married}</p>
                                )}
                            </label>
                            {/*children*/}
                            <label className="error-holder">
                                <Field component="select" className="driver-input" name="children"
                                       onChange={(e) => props.setFieldValue("children", parseInt(e.target.value))}>
                                    <YesNoDontknowDeclin state={false}/>
                                </Field>
                                {props.touched.children && props.errors.children && (
                                    <p className="errormessage">{props.errors.children}</p>
                                )}
                            </label>
                            {/*number_kids*/}
                            {props.values.children === choices.YES &&
                            <label>
                                <Field className="driver-input" type="number" name="number_kids"/>
                            </label>
                            }
                            {/*kid_info*/}
                            {props.values.children === choices.YES &&
                            <label>
                                <Field className="driver-input" type="text" name="kid_info"/>
                            </label>
                            }
                            {/*motivation*/}
                            <label className="error-holder">
                                <Field className="driver-input" type="text" name="motivation"/>
                                {props.touched.motivation && props.errors.motivation && (
                                    <p className="errormessage">{props.errors.motivation}</p>
                                )}
                            </label>
                            {/*story*/}
                            <label className="error-holder">
                                <Field className="driver-input" type="text" name="story"/>
                                {props.touched.story && props.errors.story && (
                                    <p className="errormessage">{props.errors.story}</p>
                                )}
                            </label>
                            {/*dream*/}
                            <label className="error-holder">
                                <Field className="driver-input" type="text" name="dream"/>
                                {props.touched.dream && props.errors.dream && (
                                    <p className="errormessage">{props.errors.dream}</p>
                                )}
                            </label>

                        </div>
                    </div>
                </Form>
            </DriverFormStyle>
        </FormItems>
    );
}


const FormikDriverForm = withFormik({
    mapPropsToValues(
        {
            driver_name,
            district,
            district_other,
            subcounty,
            subcounty_other,
            stage,
            parish_other,
            phone,
            carrier,
            another_phone,
            phone_2,
            carrier_2,
            reliability,
            latitude,
            longitude,
            own_boda,
            boda_night,
            transfers,
            married,
            children,
            number_kids,
            kid_info,
            motivation,
            story,
            dream

        }) {
        return {
            driver_name: driver_name || '',
            district: district || '',
            district_other: district_other || '',
            subcounty: subcounty || '',
            subcounty_other: subcounty_other || '',
            stage: stage || '',
            parish_other: parish_other || '',
            phone: phone || '',
            carrier: carrier || '',
            another_phone: another_phone || '',
            phone_2: phone_2 || '',
            carrier_2: carrier_2 || '',
            reliability: reliability || '',
            latitude: latitude || '',
            longitude: longitude || '',
            own_boda: own_boda || '',
            boda_night: boda_night || '',
            transfers: transfers || '',
            married: married || '',
            children: children || '',
            number_kids: number_kids || '',
            kid_info: kid_info || '',
            motivation: motivation || '',
            story: story || '',
            dream: dream || '',
        };
    },

    validationSchema: Yup.object().shape({
        driver_name: Yup.string().required("Please type driver name"),
        phone: Yup.string().required("Please type driver`s phone"),
        latitude: Yup.number().required("Please type latitude"),
        longitude: Yup.number().required("Please type longitude"),

    }),

    handleSubmit(values, {props}) {
        let driver = {};
        for (let property  in values) {
            if (typeof values[property] === 'string' && values[property].length > 0) driver[property] = values[property];
            if (typeof values[property] === 'number') driver[property] = values[property];
        }
        if (props.match.params.id) {
            props.updateDriver(values.id, driver, props);
        } else {
            props.addDriver(driver, props);
        }
    }
})(DriverForm);

const mapStateToProps = state => {
    return {
        drivers: state.driversReducer.drivers,
    }
};

export default connect(mapStateToProps, {addDriver, updateDriver})(FormikDriverForm);

const DriverFormStyle = styled.div`
        font-size: .8rem;
        width: 100%;
        justify-content: center;
        background: white;
        border: 1.5px solid #EEEEEF;
        margin: 0;

        @media (max-width: 1350px)
      .regular-input {
          margin-bottom: 18px;
      }
        
        .form-contents{
            display: flex;
            justify-content: center;
            margin: 0;
        }
        
        ul{
          position: relative;
        }
        
        .edit-personal{
            display: flex;
            justify-content: flex-start;
            margin-left: 1%;
            margin-bottom: 50px;
        }
        .personal-name{
            font-weight: bold;
            line-height: 16px;
        }
        
        .edit-title{
            position: absolute;
            top: -50px;
        }
        
        .edit-form{
          margin-top: 60px;
        }
        
        .inline{
          margin-bottom: 30px;
          padding-top: 24px;
        }
      
      .column{
        padding: 1%;
      }
      .column-title{
          text-align:center;
      }
      
      .inline-label{
        display: flex;
        align-items: center;
      }


      .input{
        margin-left: 1%;
        min-width: 25px;
        margin-bottom: 10px;
      }
      .label-value{
        justify-content: center;
        text-align: left;
        width: 45%;
        .edit-title{
            text-align: right;
            min-width: 360px;
        }
        @media(max-width:1024px){
         width: 70%;
         display: flex;
         justify-content: flex-start;      
        }
      }
    `;