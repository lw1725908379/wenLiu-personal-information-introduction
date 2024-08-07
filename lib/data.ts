import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rubicGameImage from "@/public/2048-game.png";
import typingSpeedImage from "@/public/typing-speed.png";
// import breadditImage from "@/public/breaddit.png";
// import gameHubImage from "@/public/game-hub.png";
import breadditImage from "@/public/breaddit.png";
import ecImage from "@/public/ec-image.png";
import chargeImage from "@/public/charge-image.png";
import powerImage from "@/public/power-image.png";
import natmImage from "@/public/natm-image.png";
import blogImage from "@/public/blog-image.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
}

export const experiencesData = [
    {
        title: "HDU",
        location: "Hangzhou, China",
        description:
            "Obtained a master's degree, won third-class scholarships from the school six times, and served as a branch committee member of the 22nd-level graduate student party branch of the college. Have an in-depth understanding of fields such as machine learning and new energy. Develop the ability to solve problems independently, be able to quickly learn and conduct research by reading literature and technology blogs, have strong ability to withstand stress, and be fully prepared for efficient application in a technology-driven environment.",
        icon: React.createElement(LuGraduationCap),
        date: "2022 Sep - 2025 May",
    },
    {
        title: "Hangzhou University of Electronic Science and Technology Shangyu Science and Engineering Research Institute Co., Ltd.",
        location: "Shaoxin , Shangyu",
        description:
            "Assist in collecting the company's friction stir welding (FSW) process test records and measuring its tensile strength. Process raw data and complete feature engineering. Establish a three-dimensional transient model and convert raw data into physical quantities. Linear models are established for the original data and calculated physical quantities respectively. Finally, it was found that temperature and maximum shear stress have the most significant effects on the tensile strength of materials. The KNN model achieves the best performance at a 7:3 data set ratio (the original parameter data set accuracy is 83.3%, and the calculated data set reaches 90%).",
        icon: React.createElement(FaReact),
        date: "2022 Sep - 2023 Feb",
    },
    {
        title: "Jiangxi Agricultural University (Software Engineering) Bachelor",
        location: "NanChang, China",
        description:
            "4.0/5 GPA, Bachelor's degree in Software Engineering. Master the basic knowledge of computers, including data structure, computer networks, operating systems, etc. Won the school's second-class scholarship once and the school's third-class scholarship six times. Served as deputy director of the Network Construction Department of the Youth League Committee of the Academy. Graduation project    Community Epidemic Management System Based on SringBoot .",
        icon: React.createElement(LuGraduationCap),
        date: "2018 Sep - 2022 Jun",
    },

]

export const experiencesDataZn = [
    {
        "title": "杭州电子科技大学 硕士",
        "location": "杭州",
        "description": "获得硕士学位，获校三等奖学金六次，担任院22级研究生党支部支委。对机器学习和新能源等领域有了深入了解。培养了独立解决问题的能力，能够通过阅读文献和技术博客快速上手并开展研究，具备较强的抗压能力，为在技术驱动的环境中高效应用做好了充分准备。",
        icon: React.createElement(LuGraduationCap),
        "date": "2022年9月 - 2025年6月"
    },
    {
        "title": "杭州电子科技大学上虞科学与工程研究院有限公司",
        "location": "绍兴，上虞",
        "description": "协助收集企业的摩擦搅拌焊（FSW）工艺试验记录并测量其抗拉强度。处理原始数据，完成特征工程。建立三维瞬态模型，将原始数据转化为物理量。分别对原始数据和计算后物理量进行线性模型的建立。最终得到温度和最大剪切应力对材料抗拉强度影响最显著。KNN模型在7:3数据集比例下达到最佳性能（原始参数数据集准确度为83.3%，计算后数据集达90%）。",
        "icon": React.createElement(FaVuejs),
        "date": "2022年9月 - 2023年12月"
    },
    {
        "title": "江西农业大学（软件工程）  学士",
        "location": "南昌",
        "description": "GPA 4.0/5，获得软件工程学士学位。掌握了计算机基础知识，包括数据结构，计算机网络，操作系统等。获校二等奖学金一次，校三等奖学金六次。担任院团委网络建设部副部长。毕业设计《基于SringBoot的社区疫情管理系统》。",
        "icon": React.createElement(LuGraduationCap),
        "date": "2018年9月 - 2022年6月"
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        title: "ChargingStationManage",
        title_zh: '充电站管理系统',
        description: "A responsive game grid application that offers search and filter functionality, and features infinite scrolling using React Query. It also includes robust form validation with Zod and efficient state management with Zustand.",
        desc_zh: "该项目通过多角色管理系统、高效的图片处理与审核、敏感词管理、延迟队列调度和ES搜索功能，结合Spring Boot、Spring Cloud、Docker等技术，提供全面优化的充电桩预约及管理服务。(用戶名：visitor 密碼：visitor)",
        tags: ["B/S", "SpringBoot", "SpringCloud", "MySQL", "Redis", "MongoDB", "Minio", "Kafaka", "ES"],
        imageUrl: chargeImage,
        projectUrl: 'https://gitee.com/liuwenspecial/ChargingStationManage',
        //TODO:
        demoUrl: 'http://www.wenliu.site',
    },
    {
        title: "power_supply",
        title_zh: '程控电源',
        description:
            "This project develops a control system for anodizing TiO2 nanotubes. It includes a user-friendly power supply class for automated preparation, voltage and current control, data recording, and executing predefined oxidation processes.",
        desc_zh: "这个项目是一个TiO2纳米管阳极氧化过程的控制系统。经过模块化开发，设计了电源类，提供了一个简单的阳极氧化接口，只需输入简单的参数就可以实现自动化制备。它包括用于控制电源的功能模块，以及用于执行阳极氧化过程的模块。通过该系统，可以轻松地控制电压和电流，记录电压、电流和功率数据，并执行预定义的氧化过程。",
        tags: ["python", "modbus_tk", "serial", 'Independent development'],
        // typingSpeedImage
        imageUrl: powerImage,
        projectUrl: 'https://github.com/lw1725908379/power_supply.git',
        // 上线后换~
        demoUrl: 'https://wen-liu-personal-information-introduction-ds9mfvjho.vercel.app',
    },
    {
        title: "potential-start",
        title_zh: '电化学测试小程序',
        description:
            "A customized electrochemical test applet implemented based on the teensy 3.2 development board. Its functions include: cyclic voltammetry test (cv), Cdl test, lsv test, tafel test, i-t test and other functions.",
        desc_zh: "基于teensy 3.2 开发板实现的定制化电化学测试小程序，功能包括：循环伏安测试（cv）、Cdl测试、lsv测试、tafel测试、i-t测试等功能。",
        tags: ["python", "teensy 3.2", "customized app", 'electrochemical'],
        // typingSpeedImage
        imageUrl: ecImage,
        projectUrl: 'https://gitee.com/liuwenspecial/my-potential-start',
        // 上线后换~
        demoUrl: 'https://wen-liu-personal-information-introduction-ds9mfvjho.vercel.app',
    },
    {
        title: "NucleicAcidTestManagement",
        title_zh: '基于SpringBoot的社区疫情管理系统',
        description: "This is a community epidemic management system based on the B/S architecture, developed using the SpringBoot framework with Java, Freemarker, and SpringBoot. It includes user, personnel, and address management, as well as nucleic acid testing records.",
        desc_zh: "这是一个基于B/S架构的社区疫情管理系统，使用SpringBoot框架开发，采用Java语言、Freemarker和SpringBoot等技术。使用Idea作为开发工具，MySql作为数据库工具。系统实现了用户管理、人员管理、地址管理和核酸检测记录等功能，有助于社区核酸检测的统计工作。",
        tags: ["B/S", "SpringBoot", "MySQL", "Redis", "Freemaker"],
        imageUrl: natmImage,
        projectUrl: 'https://github.com/lw1725908379/NucleicAcidTestManagement.git',
        //TODO:
        demoUrl: 'https://github.com/lw1725908379/NucleicAcidTestManagement.git',
    },
    {
        title: "gitHub Blog",
        title_zh: '以github为托管的个人博客',
        description: "Personal blog hosted on GitHub",
        desc_zh: "以github为托管的个人博客",
        tags: ["B/S", "SpringBoot", "MySQL", "Redis", "Freemaker", "Layui", "Bootstrap"],
        imageUrl: blogImage,
        projectUrl: 'https://github.com/lw1725908379/blog.git',
        //TODO:
        demoUrl: 'https://blog-i9gm-c3rtassxj-lw1725908379s-projects.vercel.app',
    },
]

export const skillsData = [
    "JAVA",
    "Python",
    "Spring",
    "SpringMVC",
    "SpringBoot",
    "SpringCloud",
    "Docker",
    "MyBatis",
    "Mysql",
    "Redis",
    "MongDB",
    "Maven",
    "Nacos",
    "Kafka",
    "ES",
    "Minio",
    "HTML",
    "CSS",
    "JavaScript",
    "Next",
    "Vue2",
    "Vue3",
    "Node",
    "Git",
    "Github",
    "sklearn",
    "DFA",
    "OCR",
    "3dMax"
] 
