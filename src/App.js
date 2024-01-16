// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {CacheHierarchy} from "./components/graduateprojects/CacheHierarchy";
import {BranchPrediction} from "./components/graduateprojects/BranchPrediction";
import {InstructionScheduler} from "./components/graduateprojects/InstructionScheduler";
import {ParallelRadixSort} from "./components/graduateprojects/ParallelRadixSort";
import {CacheCoherence} from "./components/graduateprojects/CacheCoherence";
import {BinaryConvolution} from "./components/graduateprojects/BinaryConvolution";
import {TraceCache} from "./components/graduateprojects/TraceCache";
import {IICVerification} from "./components/graduateprojects/IICVerification";
import {VLSISYstem} from "./components/graduateprojects/VLSISYstem";
import {UVM} from "./components/graduateprojects/UVM";
import {LLVM} from "./components/graduateprojects/LLVM";
import {DeepLearning} from "./components/graduateprojects/DeepLearning";
import {Breadboard} from "./components/hardwareprojects/Breadboard";
import {Chip} from "./components/hardwareprojects/Chip";
import {RiscvRTL} from "./components/hardwareprojects/RiscvRTL";
import {RTLSynthesis} from "./components/hardwareprojects/RTLSynthesis";
import {PhysicalDesign} from "./components/hardwareprojects/PhysicalDesign";
import {Lanedetection} from "./components/AIprojects/Lanedetection";
import {Advancedlane} from "./components/AIprojects/Advancedlane";
import {Traffic} from "./components/AIprojects/Traffic";
import {BehaviouralClone} from "./components/AIprojects/BehaviouralClone";
import {EKF} from "./components/AIprojects/EKF";
import {Vehiclelocalization} from "./components/AIprojects/Vehiclelocalization";
import {Highway} from "./components/AIprojects/Highway";
import {PidControl} from "./components/AIprojects/PidControl";
import {SystemIntegration} from "./components/AIprojects/SystemIntegration";
import {Robotichand} from "./components/AIprojects/Robotichand";
import {RobotLocalization} from "./components/AIprojects/RobotLocalization";
import {RoboticMapping} from "./components/AIprojects/RoboticMapping";
import {SLAM} from "./components/AIprojects/SLAM";
import {Navigation} from "./components/AIprojects/Navigation";
import {ContinousControl} from "./components/AIprojects/ContinousControl";
import {Collaboration} from "./components/AIprojects/Collaboration";
import {Ecommerce} from "./components/AIprojects/Ecommerce";
import {IgemHypo1} from "./components/qcprojects/IgemHypo1";
import {IgemHypo2} from "./components/qcprojects/IgemHypo2";
import {MZM} from "./components/qcprojects/MZM";
import {Qosf} from "./components/qcprojects/Qosf";
import {Opensource1} from "./components/qcprojects/Opensource1";
import {Opensource2} from "./components/qcprojects/Opensource2";
import {QNLP} from "./components/qcprojects/QNLP";
import {HaqsQML} from "./components/qcprojects/HaqsQML";
import {AmpEmbedding} from "./components/qcprojects/AmpEmbedding";
import {Quantumdots} from "./components/qcprojects/Quantumdots";
import {Qhardware} from "./components/qcprojects/Qhardware";
import {Graduate} from "./components/education/Graduate";
import {Undergraduate} from "./components/education/Undergraduate";
import {Exp1, exp1} from "./components/experience/Exp1";
import {Exp2} from "./components/experience/Exp2";
import {Exp3} from "./components/experience/Exp3";
import {SIH} from "./components/hardwareprojects/SIH";
import {EmbeddedSystems} from "./components/hardwareprojects/EmbeddedSystems";
import {NLPProject} from "./components/AIprojects/NLPProject";
import {TamilClassification} from "./components/AIprojects/TamilClassification";
import {FuProject} from "./components/qcprojects/FuProject";


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/CacheHierarchy" element={<CacheHierarchy />} />
                <Route path="/BranchPrediction" element={<BranchPrediction />} />
                <Route path="/InstructionScheduler" element={<InstructionScheduler/>} />
                <Route path="/ParallelRadixSort" element={<ParallelRadixSort/>}/>
                <Route path="/CacheCoherence" element={<CacheCoherence/>} />
                <Route path="/BinaryConvolution" element={<BinaryConvolution/>}/>
                <Route path="/TraceCache" element={<TraceCache/>}/>
                <Route path="/IICVerification" element={<IICVerification/>}/>
                <Route path="/VLSISYstem" element={<VLSISYstem/>}/>
                <Route path="/UVM" element={<UVM/>}/>
                <Route path="/LLVM" element={<LLVM/>}/>
                <Route path="/DeepLearning" element={<DeepLearning/>}/>

                <Route path="/Breadboard" element={<Breadboard/>}/>
                <Route path="/Chip" element={<Chip/>}/>
                <Route path="/RiscvRTL" element={<RiscvRTL/>}/>
                <Route path="/RTLSynthesis" element={<RTLSynthesis/>}/>
                <Route path="/PhysicalDesign" element={<PhysicalDesign/>}/>
                <Route path="/EmbeddedSystems" element={<EmbeddedSystems/>}/>
                <Route path="/SIH" element={<SIH/>}/>

                <Route path="/Lanedetection" element={<Lanedetection/>}/>
                <Route path="/Advancedlane" element={<Advancedlane/>}/>
                <Route path="/Traffic" element={<Traffic/>}/>
                <Route path="/BehaviouralClone" element={<BehaviouralClone/>}/>
                <Route path="/EKF" element={<EKF/>}/>
                <Route path="/Vehiclelocalization" element={<Vehiclelocalization/>}/>
                <Route path="/Highway" element={<Highway/>}/>
                <Route path="/PidControl" element={<PidControl/>}/>
                <Route path="/SystemIntegration" element={<SystemIntegration/>}/>
                <Route path="/Robotichand" element={<Robotichand/>}/>
                <Route path="/RobotLocalization" element={<RobotLocalization/>}/>
                <Route path="/RoboticMapping" element={<RoboticMapping/>}/>
                <Route path="/SLAM" element={<SLAM/>}/>
                <Route path="/Navigation" element={<Navigation/>}/>
                <Route path="/ContinousControl" element={<ContinousControl/>}/>
                <Route path="/Collaboration" element={<Collaboration/>}/>
                <Route path="/NLPProject" element={<NLPProject/>}/>
                <Route path="/TamilClassification" element={<TamilClassification/>}/>
                <Route path="/Ecommerce" element={<Ecommerce/>}/>

                <Route path="/IgemHypo1" element={<IgemHypo1/>}/>
                <Route path="/IgemHypo2" element={<IgemHypo2/>}/>
                <Route path="/MZM" element={<MZM/>}/>
                <Route path="/Qosf" element={<Qosf/>}/>
                <Route path="/Opensource1" element={<Opensource1/>}/>
                <Route path="/Opensource2" element={<Opensource2/>}/>
                <Route path="/QNLP" element={<QNLP/>}/>
                <Route path="/HaqsQML" element={<HaqsQML/>}/>
                <Route path="/AmpEmbedding" element={<AmpEmbedding/>}/>
                <Route path="/Quantumdots" element={<Quantumdots/>}/>
                <Route path="/FuProject" element={<FuProject/>}/>
                <Route path="/Qhardware" element={<Qhardware/>}/>

                <Route path="/Graduate" element={<Graduate/>}/>
                <Route path="/Undergraduate" element={<Undergraduate/>}/>

                <Route path="/Exp1" element={<Exp1/>}/>
                <Route path="/Exp2" element={<Exp2/>}/>
                <Route path="/Exp3" element={<Exp3/>}/>
            </Routes>
        </div>
    )
}

export default App;
