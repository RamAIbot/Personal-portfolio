import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import cache_img from '../assets/images/cache_emulation_img.png'
import branch_img from '../assets/images/branch_pred_img.png'
import ooo from '../assets/images/ooo.png'
import radix_sort from '../assets/images/radix_sort_img.png'
import cache_coherence from '../assets/images/cache_coherency_img.png'
import bconv from '../assets/images/bconv.png'
import trace from '../assets/images/trace_img.png'
import i2c from '../assets/images/i2c_img.png'
import sram from '../assets/images/sram_img.png'
import lc3 from '../assets/images/lc3_img.png'
import llvm from '../assets/images/llvm_img.png'
import nn from '../assets/images/nn_img.png'
import bb from '../assets/images/bb_img.png'
import chip8 from '../assets/images/chip8_img.png'
import riscv from '../assets/images/riscv_img.png'
import synth from '../assets/images/synth_img.png'
import pd from '../assets/images/pd_img.png'
import basic_lane from '../assets/images/basic_lane_img.png'
import adv_lane from '../assets/images/adv_lane_img.png'
import traffic from '../assets/images/traffic_img.png'
import behavior from '../assets/images/beh_img.png'
import kf from '../assets/images/kalman_img.png'
import pf from '../assets/images/particle_img.png'
import highway from '../assets/images/highway_img.png'
import pid from '../assets/images/pid_img.png'
import system from '../assets/images/system_img.png'
import arm from '../assets/images/arm_img.png'
import local from '../assets/images/local_img.png'
import mapping from '../assets/images/map_img.png'
import slam from '../assets/images/slam_img.png'
import banana from '../assets/images/nav1_img.png'
import con_control from '../assets/images/cc_img.png'
import colab from '../assets/images/colab_img.png'
import pic from '../assets/images/pic_img.png'
import ecom from '../assets/images/ecomm_img.png'
import qml1 from '../assets/images/qml1_img.png'
import qml2 from '../assets/images/qml2_img.png'
import dvqc from '../assets/images/perceval_img.png'
import qn from '../assets/images/qn_img.png'
import covalent from '../assets/images/covalent_img.png'
import lambeq from '../assets/images/lambeq1_img.png'
import haqs1 from '../assets/images/haqs1_img.png'
import haqs2 from '../assets/images/haqs2_img.png'
import iquhack from '../assets/images/iquhack_img.png'
import c2q from '../assets/images/c2q_img.png'
import fujit from '../assets/images/fujitsu_img.png'
import qisk from '../assets/images/qiskit_img.png'
import emb from '../assets/images/emb_img.png'
import sih from '../assets/images/sih_img.png'
import qca from '../assets/images/qca_img.png'
import ncsu from '../assets/images/ncsu_logo.png'
import ssn_logo from '../assets/images/ssn_logo.png'
import intel_logo from '../assets/images/intel_logo.png'
import tcs_logo from '../assets/images/tcs_logo.png'
import en_logo from '../assets/images/en_img.png'
import csir_logo from '../assets/images/csir_logo.png'
import {Breadboard} from "./hardwareprojects/Breadboard";
import {Lanedetection} from "./AIprojects/Lanedetection";
export const Projects = () => {

    const projects = [
        {
            title: "Cache hierarchy Modeling",
            description: "Microprocessor Architecture",
            imgUrl: cache_img,
            buttonUrl: "/CacheHierarchy"
        },
        {
            title: "Branch predictor Modeling",
            description: "Microprocessor Architecture",
            imgUrl: branch_img,
            buttonUrl: "/BranchPrediction"
        },
        {
            title: "Dynamic Instruction Scheduler",
            description: "Microprocessor Architecture",
            imgUrl: ooo,
            buttonUrl: "/InstructionScheduler"
        },
        {
            title: "Parallel Radix Sort",
            description: "Parallel Computer Architecture",
            imgUrl: radix_sort,
            buttonUrl: "/ParallelRadixSort"
        },
        {
            title: "Cache Coherence Modeling",
            description: "Parallel Computer Architecture",
            imgUrl: cache_coherence,
            buttonUrl: "/CacheCoherence"
        },
        {
            title: "Binary Convolution RTL design",
            description: "ASIC and FPGA design",
            imgUrl: bconv,
            buttonUrl: "/BinaryConvolution"
        },
        {
            title: "Trace cache modeling - research",
            description: "Advanced Mirco-architecture",
            imgUrl: trace,
            buttonUrl: "/TraceCache"
        },
        {
            title: "I2C Verification",
            description: "ASIC Verification",
            imgUrl: i2c,
            buttonUrl: "/IICVerification"
        },
        {
            title: "SRAM design and layout",
            description: "VLSI System design",
            imgUrl: sram,
            buttonUrl: "/VLSISYstem"
        },
        {
            title: "LC3 Verification",
            description: "Advanced Verification in UVM",
            imgUrl: lc3,
            buttonUrl: "/UVM"
        },
        {
            title: "LLVM Compiler development",
            description: "Compiler optimization and scheduling",
            imgUrl: llvm,
            buttonUrl: "/LLVM"
        },
        {
            title: "Deep Learning",
            description: "Neural Networks",
            imgUrl: nn,
            buttonUrl: "/DeepLearning"
        }

    ]


    const projects2 = [
        {
            title: "8 bit breadboard computer",
            description: "Computer architecture and circuit design",
            imgUrl: bb,
            buttonUrl: "/Breadboard"
        },
        {
            title: "Chip8 emulator",
            description: "Emulator development",
            imgUrl: chip8,
            buttonUrl: "/Chip"
        },
        {
            title: "RISCV RTL design",
            description: "Hardware Workshop",
            imgUrl: riscv,
            buttonUrl: "/RiscvRTL"
        },
        {
            title: "RTL design synthesis",
            description: "Hardware Workshop - YOSYS tool",
            imgUrl: synth,
            buttonUrl: "/RTLSynthesis"
        },
        {
            title: "RISCV Physical design",
            description: "Hardware Workshop - OPENROAD flow",
            imgUrl: pd,
            buttonUrl: "/PhysicalDesign"
        },
        {
            title: "Embedded Systems Application Specialization",
            description: "In-Plant training on 8051, PIC, AVR and ARM based microcontrollers - HCL Technologies",
            imgUrl: emb
        },
        {
            title: "Asthma Trigger Detection System",
            description: "(All India Winner) Portable module for sensing Asthma trigger elements using IOT- Smart India Hackathon 2018 five day Hardware edition ",
            imgUrl: sih
        },

    ]


    const projects3 = [
        {
            title: "Basic Lane detection",
            description: "Self Driving Car Engineering Nanodegree - Udacity",
            imgUrl: basic_lane,
            buttonUrl: "/Lanedetection"
        },
        {
            title: "Advanced Lane detection",
            description: "Self Driving Car Engineering Nanodegree - Udacity",
            imgUrl: adv_lane,
            buttonUrl: "/Advancedlane"
        },
        {
            title: "Traffic Sign Classification",
            description: "Self Driving Car Engineering Nanodegree - Udacity",
            imgUrl: traffic,
            buttonUrl: "/Traffic"
        },
        {
            title: "Behavioral Cloning",
            description: "Self Driving Car Engineering Nanodegree - Udacity",
            imgUrl: behavior,
            buttonUrl: "/BehaviouralClone"
        },
        {
            title: "Sensor Fusion - Kalman Filtering",
            description: "Self Driving Car Engineering Nanodegree - Udacity",
            imgUrl: kf,
            buttonUrl: "/EKF"
        },
        {
            title: "Particle filter localization",
            description: "Self Driving Car Engineering Nanodegree - Udacity",
            imgUrl: pf,
            buttonUrl: "/Vehiclelocalization"
        },
        {
            title: "Highway driving - State Machine",
            description: "Self Driving Car Engineering Nanodegree - Udacity",
            imgUrl: highway,
            buttonUrl: "/Highway"
        },
        {
            title: "PID Controller",
            description: "Self Driving Car Engineering Nanodegree - Udacity",
            imgUrl: pid,
            buttonUrl: "/PidControl"
        },
        {
            title: "System Integration",
            description: "Self Driving Car Engineering Nanodegree - Udacity",
            imgUrl: system,
            buttonUrl: "/SystemIntegration"
        },
        {
            title: "Arm Mover - 2 joints",
            description: "Robotic Operating System Nanodegree - Udacity",
            imgUrl: arm,
            buttonUrl: "/Robotichand"
        },
        {
            title: "Localization of the Robot",
            description: "Robotic Operating System Nanodegree - Udacity",
            imgUrl: local,
            buttonUrl: "/RobotLocalization"
        },
        {
            title: "Robotic Mapping",
            description: "Robotic Operating System Nanodegree - Udacity",
            imgUrl: mapping,
            buttonUrl: "/RoboticMapping"

        },
        {
            title: "Simultaneous localization and mapping (SLAM)",
            description: "Robotic Operating System Nanodegree - Udacity",
            imgUrl: slam,
            buttonUrl: "/SLAM"
        },
        {
            title: "Navigation - Value based methods",
            description: "Deep Reinforcement learning nanodegree- Udacity",
            imgUrl: banana,
            buttonUrl: "/Navigation"
        },
        {
            title: "Continuous Control - Policy based methods",
            description: "Deep Reinforcement learning nanodegree- Udacity",
            imgUrl: con_control,
            buttonUrl: "/ContinousControl"
        },
        {
            title: "Collaboration - Multi-agent RL",
            description: "Deep Reinforcement learning nanodegree- Udacity",
            imgUrl: colab,
            buttonUrl: "/Collaboration"
        },
        {
            title: "Natural Language Processing",
            description: "Natural Language Processing specialization- Coursera",
            imgUrl: colab
        },
        {
            title: "Tamil Character detection",
            description: "Deep learning image classifier - Kaggle (PadhAI)",
            imgUrl: colab
        },
        {
            title: "E-commerce website development",
            description: "Full stack web development - coursework NIIT",
            imgUrl: ecom,
            buttonUrl: "/Ecommerce"
        },

    ]

    const projects4 = [
        {
            title: "Quantum Machine learning - MRI classification",
            description: "iGEM 2023 competition - Dry Lab",
            imgUrl: qml1
        },
        {
            title: "Quantum Machine learning - Drug-target classification",
            description: "iGEM 2023 competition - Dry Lab",
            imgUrl: qml2
        },
        {
            title: "Quantum Machine learning for Dementia classification",
            description: "Developing QML models to run on 32 Qubits simulator and performance analysis - Fujitsu $100K Quantum Simulation Challenge 2023",
            imgUrl:fujit
        },
        {
            title: "Mach Zehnder Modulator design and layout",
            description: "Photonic Integrated Circuit - edX MITx 3.46.2x",
            imgUrl:pic
        },
        {
            title: "Error Mitigation and QAOA implementation",
            description: "Perceval DV Quantum Computing  - QOSF Mentorship 2023",
            imgUrl:dvqc
        },
        {
            title: "Implementation of BB84 protocol",
            description: "Secure Quantum Network Protocol Simulation - QuNetSim",
            imgUrl:qn
        },
        {
            title: "Implementation of distributed QML training and inference",
            description: "QML distribution between quantum computers simulation - Covalent",
            imgUrl:covalent
        },
        {
            title: "Sentence category detection - QNLP",
            description: "QNLP model training and inference - Lambeq",
            imgUrl:lambeq
        },
        {
            title: "QML using VQC and Kernel methods",
            description: "Supervised learning classification using QML - HAQS 2022",
            imgUrl:haqs1
        },
        {
            title: "Amplitude Embedding implementation",
            description: "(Winner) Implementation of classical to quantum feature transformation circuit - HAQS (QOSF) 2022",
            imgUrl:haqs2
        },
        {
            title: "Quantum Music Generation",
            description: "(Runner Up) Implementation of QML for generating beats and music - iQuHACK 2023 MIT inperson",
            imgUrl:iquhack
        },
        {
            title: "Quantum-Dot digital design",
            description: "Design of 1-Bit Half and Full Subtractor using Quantum-Dot Cellular Automata(QCA) - IEEE pub. DOI: 10.1109/ICPCSI.2017.8392132",
            imgUrl:qca
        },
        {
            title: "Superconducting Qubits design fundamentals",
            description: "Quantum Hardware design course - C2QA",
            imgUrl:c2q
        },
        {
            title: "Qiskit Summer School and Challenges",
            description: "Quantum education - IBM Qiskit",
            imgUrl:qisk
        },

    ]

    const projects5 = [
        {
            title: "MS in Computer Engineering",
            description: "Graduated from North Carolina State University with MS in Computer Engineering and GPA - 3.963",
            imgUrl:ncsu
        },
        {
            title: "BE in Electronics and Communication Engineering",
            description: "Graduated from Sri Sivasubramaniya Nadar College of Engineer with BE in ECE and GPA - 8.54/10",
            imgUrl:ssn_logo
        },
    ]

    const projects6 = [
        {
            title: "Graduate Intern - Backend design team",
            description: "Graduate Co-Op Intern from June 2022 to May 2023",
            imgUrl:intel_logo
        },
        {
            title: "Software developer",
            description: "Worked as a Software developer (System Engineering) - 1 year and 4 months",
            imgUrl:tcs_logo
        },
        {
            title: "Firmware developer",
            description: "Interned at Enability foundation for rehabilitation - IITM startup - 3 months",
            imgUrl:en_logo
        },
        {
            title: "Firmware developer",
            description: "Interned at CSIR-CEERI - Central government project - 2 months",
            imgUrl:csir_logo
        },
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>sdasdasdad asdasdadsa asdasdasda a sda sdasdas</p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Graduate projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Hardware projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Artificial Intelligence</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Quantum Computing</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Education</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth">Experience</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        projects2.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey="third">
                                <Row>
                                    {
                                        projects3.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey="fourth">
                                <Row>
                                    {
                                        projects4.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey="fifth">
                                <Row>
                                    {
                                        projects5.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey="sixth">
                                <Row>
                                    {
                                        projects6.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}