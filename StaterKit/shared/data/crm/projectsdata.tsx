
interface folder {
    Name: string
    src: string
    data: string
    sdate: string
    edate: string
    Project: string
    percent: string
    Projects: string
    Ranking: string
    Budget: string
    progress: string
    noww: number

}
export const project: folder[] = [
    {
        Name: "Business Management",
        src: "",
        data: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor..",
        sdate: "01-08-22",
        edate: "17-08-22",
        Project: "Project-1",
        percent: "55%",
        Projects: "24",
        Ranking: "3rd",
        Budget: "$36,2585",
        progress: "primary",
        noww: 55
    },
    {
        Name: "Project  Management",
        src: "",
        data: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor..",
        sdate: "01-08-22",
        edate: "21-08-22",
        Project: "Project-2",
        percent: "35%",
        Projects: "12",
        Ranking: "5rd",
        Budget: "$6,23,546",
        progress: "secondary",
        noww: 35
    },

    {
        Name: "Hotel   Management",
        src: "",
        data: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor..",
        sdate: "01-08-22",
        edate: "03-09-22",
        Project: "Project-2",
        percent: "50%",
        Projects: "5",
        Ranking: "2nd",
        Budget: "$12,2889",
        progress: "success",
        noww: 50
    },

    {
        Name: "Program  Management",
        src: "",
        data: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor..",
        sdate: "01-08-22",
        edate: "17-08-22",
        Project: "Project-1",
        percent: "55%",
        Projects: "24",
        Ranking: "3rd",
        Budget: "$36,2585",
        progress: "primary",
        noww: 55
    },

];

// Row2
interface folder2 {
    img: any
    Name: string
    task: string
    messages: string
    status: string
    project: string
    percent: any
    sclr: string
    icon1: string
    icon2: string
    pro: number
    now: string
    progress: string
}
// let png = <i className="fa fa-music text-secondary"></i>
export const project2: folder2[] = [
    {
        img: "../../../assets/images/background/22.jpg",
        Name: "Project Management",
        task: "2 Tasks",
        messages: "2 Messages",
        status: "Processing",
        sclr: "secondary",
        project: "Project5",
        percent: 50,
        icon1: "bg-warning",
        icon2: "fa fa-bolt",
        pro: 50,
        progress: "secondary",
        now: ""

    },
    {
        img: "../../../assets/images/background/13.jpg",
        Name: "Hospital Management",
        task: "12 Tasks",
        messages: "22 Messages",
        status: "Testing",
        sclr: "success",
        project: "Project7",
        percent: 35,
        icon1: "",
        icon2: "",
        pro: 0,
        progress: "success",
        now: ""
    },
    {
        img: "../../../assets/images/background/23.jpg",
        Name: "Hotel Management",
        task: "30 Tasks",
        messages: "25 Messages",
        status: "Success",
        sclr: "primary",
        project: "Project3",
        percent: 100,
        icon1: "bg-warning",
        icon2: "fa fa-bolt",
        pro: 0,
        progress: "primary",
        now: ""
    },
    {
        img: "../../../assets/images/background/11.jpg",
        Name: "Program Management",
        task: "10 Tasks",
        messages: "15 Messages",
        status: "Testing",
        sclr: "success",
        project: "Project7",
        percent: 35,
        icon1: "",
        icon2: "",
        pro: 0,
        progress: "success",
        now: ""
    },
    {
        img: "../../../assets/images/background/14.jpg",
        Name: "Records Management",
        task: "8 Tasks",
        messages: "23 Messages",
        status: "Processing",
        sclr: "secondary",
        project: "Project7",
        percent: 47,
        icon1: "bg-warning",
        icon2: "fa fa-bolt",
        pro: 0,
        progress: "secondary",
        now: ""
    }, {
        img: "../../../assets/images/background/25.jpg",
        Name: "Integrated Management",
        task: "35 Tasks",
        messages: "144 Messages",
        status: "Testing",
        sclr: "success",
        project: "Project7",
        percent: 65,
        icon1: "",
        icon2: "",
        pro: 0,
        progress: "success",
        now: ""
    },
    {
        img: "../../../assets/images/background/14.jpg",
        Name: "Sports Management",
        task: "8 Tasks",
        messages: "23 Messages",
        status: "Processing",
        sclr: "secondary",
        project: "Project7",
        percent: 47,
        icon1: "bg-warning",
        icon2: "fa fa-bolt",
        pro: 0,
        progress: "secondary",
        now: ""
    },
    {
        img: "../../../assets/images/background/25.jpg",
        Name: "Education Management",
        task: "30 Tasks",
        messages: "25 Messages",
        status: "success",
        sclr: "primary",
        project: "Project3",
        percent: 100,
        icon1: "bg-warning",
        icon2: "fa fa-bolt",
        pro: 0,
        progress: "primary",
        now: ""
    }
];
