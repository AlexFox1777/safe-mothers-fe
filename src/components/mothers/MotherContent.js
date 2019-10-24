import React from 'react';
import {Divider} from "pcln-design-system";
import {Content} from './mother-style'

export default function MotherContent(props) {
    const {mother} = props;
    return (
        <>
            <Content>
                <Divider borderColor={"black"} width={1} className="divider"/>
                <div className="card">
                    <span className="title">Finance and insurance</span>
                    <div className="card-content">
                        <ul className="align-left">
                            <li>Money saved</li>
                            <li>Money decision maker</li>
                            <li>Antenatal care visits</li>
                            <li>Location of delivery</li>
                            <li>Method of arriving</li>
                            <li>Health insurance</li>
                            <li>insurance type</li>
                        </ul>
                        <ul className="align-left values">
                            <li>{mother.saving_money}</li>
                            <li>{mother.saving_money}</li>
                            <li>Money decision maker</li>
                            <li>Antenatal care visits</li>
                            <li>{mother.deliver_place}</li>
                            <li>{mother.deliver_specific}</li>
                            <li>{mother.insurance}</li>
                            <li>{mother.insurance_type}</li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <span className="title">Supplies for pregnancy</span>
                    <div className="card-content">
                        {/*  <ul className="align-left">
                            <li>Mama kit</li>
                            <li>Mackintosh</li>
                            <li>Razor</li>
                            <li>Sanitary pad</li>
                            <li>Cotton roll</li>
                            <li>Soap</li>
                            <li>Gloves</li>
                            <li>Medication</li>
                            <li>Baby clothes</li>
                            <li>Baby blanket</li>
                            <li>Sheets</li>
                            <li>Other</li>
                        </ul>*/}
                        <ul className="align-left values">
                            <li>{mother.mama_kit}</li>
                            <li>{mother.mackintosh}</li>
                            <li>{mother.razor}</li>
                            <li>{mother.pad}</li>
                            <li>{mother.cotton}</li>
                            <li>{mother.soap}</li>
                            <li>{mother.gloves}</li>
                            <li>{mother.medication}</li>
                            <li>{mother.baby_clothes}</li>
                            <li>{mother.blanket}</li>
                            <li>{mother.sheets}</li>
                            <li>{mother.supplies_other}</li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <span className="title">Medical history</span>
                    <div className="card-content">
                        <ul className="align-left">
                            <li>Number of pregnancies</li>
                            <li>Number of birth</li>
                            <li>Had twins or more</li>
                            <li>Living children</li>
                            <li>Children under five</li>
                            <li>Infant death</li>
                        </ul>
                        <ul className="align-left values">
                            <li>{mother.no_pg}</li>
                            <li>{mother.no_birth}</li>
                            <li>{mother.no_stillbirths}</li>
                            <li>{mother.no_children}</li>
                            <li>{mother.no_under5}</li>
                            <li>{mother.no_childdeath}</li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <span className="title">High risk</span>
                    <div className="card-content">
                        <ul className="align-right">
                            <li>C-section</li>
                            <li>Anemia</li>
                            <li>Malaria</li>
                            <li>Obstructed labor</li>
                            <li>Malpresentation</li>
                            <li>Hemorrhage</li>
                            <li>Retained placenta</li>
                            <li>Placenta previa</li>
                            <li>Stillbirth</li>
                            <li>Other complication</li>
                        </ul>
                        <ul className="align-right">
                            <li>{true ? <li className="status-yes">YES</li> : <li className="status-no">NO</li>}</li>
                            <li>{mother.anemia ? <li className="status-yes">YES</li> :
                                <li className="status-no">NO</li>}</li>
                            <li>{mother.malaria ? <li className="status-yes">YES</li> :
                                <li className="status-no">NO</li>}</li>
                            <li>{mother.obstructed_labor ? <li className="status-yes">YES</li> :
                                <li className="status-no">NO</li>}</li>
                            <li>{mother.malpresent ? <li className="status-yes">YES</li> :
                                <li className="status-no">NO</li>}</li>
                            <li>{false ? <li className="status-yes">YES</li> : <li className="status-no">NO</li>}</li>
                            <li>{false ? <li className="status-yes">YES</li> : <li className="status-no">NO</li>}</li>
                            <li>{mother.placenta_previa ? <li className="status-yes">YES</li> :
                                <li className="status-no">NO</li>}</li>
                            <li>{true ? <li className="status-yes">YES</li> : <li className="status-no">NO</li>}</li>
                            <li>{mother.other_complication ? <li className="status-yes">YES</li> :
                                <li className="status-no">NO</li>}</li>
                        </ul>
                    </div>
                </div>
            </Content>
        </>
    )
}

