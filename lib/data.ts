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
    // {
    //     title: "Frontend Intern",
    //     location: React.createElement("span", {},
    //         React.createElement("a", {
    //             href: "https://www.nio.com/",
    //             style: { textDecoration: 'underline' },
    //             target: "_blank"
    //         }, "NIO Inc."),
    //         " Wuhan, China"
    //     ),
    //     description:
    //         "Developed NIO's third-generation station list and detail pages using Vue3, TypeScript, and Baidu Maps API. Implemented role-based access control for the Task Wizard page, enhancing system security. Collaborated effectively within a Jira-managed environment, utilizing Jenkins for deployment processes.",
    //     icon: React.createElement(FaVuejs),
    //     date: "2022 Aug - 2022 Dec",
    // },
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
        "date": "2022年9月 - 2023年2月"
    },
    // {
    //     "title": "前端开发",
    //     "location": "武汉大学大数据研究院",
    //     "description": "使用umi（React框架）和Ant Design Pro开发和维护Finknow，一个金融知识图谱查询和分析平台。利用基于G6的React图分析工具包graphin开发了股权网络穿透图，增强了数据可视化功能。",
    //     "icon": React.createElement(FaReact),
    //     "date": "2022年5月 - 2022年7月"
    // },
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
        demoUrl: 'https://joy-typing-speed-game.vercel.app/',
    },
    {
        title: "ChargingStationManage",
        title_zh: '充电站管理系统',
        description: "A responsive game grid application that offers search and filter functionality, and features infinite scrolling using React Query. It also includes robust form validation with Zod and efficient state management with Zustand.",
        desc_zh: "开发了一个充电桩管理系统，采用B/S架构，使用SpringBoot、MySQL和Redis技术，包含运营商管理、充电桩管理、预约管理等模块，提高了管理和服务效率。",
        tags: ["B/S", "SpringBoot", "MySQL", "Redis", "Vue3.0", "ElementUI-Plus"],
        imageUrl: chargeImage,
        projectUrl: 'https://gitee.com/liuwenspecial/ChargingStationManage',
        //TODO:
        demoUrl: 'https://new-game-hub.vercel.app/',


    },
    // {
    //     title: "Breaddit",
    //     title_zh: "社交新闻论坛",
    //     description:
    //         `A modern full-stack Reddit clone features infinite scrolling, secure authentication via NextAuth and Google, and a custom feed for authenticated users. It utilizes Upstash Redis for advanced caching and React-Query for efficient data fetching, ensuring a responsive and user-friendly experience with optimistic updates.
    //         `,
    //     desc_zh: "一个现代化的全栈Reddit克隆",
    //     tags: ["JavaScript", "HTML", "CSS3"],
    //     imageUrl: breadditImage,
    //     projectUrl: 'https://github.com/Codefreyy/Breaddit',
    //     demoUrl: '',
    // },


]

export const skillsData = [
    "JAVA",
    "Spring",
    "SpringMVC",
    "SpringBoot",
    "MyBatis",
    "Mysql",
    "Redis",
    "Maven",
    "NACOS",
    "PYTHON",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next",
    "Vue2",
    "Vue3",
    "Node",
    "Git",
    "Github",
] 
