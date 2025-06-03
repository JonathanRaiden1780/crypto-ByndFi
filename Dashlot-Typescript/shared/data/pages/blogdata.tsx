
//Blog
interface blog {
    id: number
    src: string
    title: string
    content: String
    text: String
    className: String
}
export const blogs: blog[] = [
    { id: 1, src: "../../../../assets/images/background/19.jpg", title: "Blog title", content: "Some quick example text to build on the card title and make up the bulk of the card's content.", text: "Read more", className: "" },
    { id: 2, src: "../../../../assets/images/background/20.jpg", title: "Blog title", content: "Some quick example text to build on the card title and make up the bulk of the card's content.", text: "Read more", className: "text-info" },
    { id: 3, src: "../../../../assets/images/background/17.jpg", title: "Blog title", content: "Some quick example text to build on the card title and make up the bulk of the card's content.", text: "Read more", className: "float-end text-success" },
    { id: 4, src: "../../../../assets/images/background/21.jpg", title: "Blog title", content: "Some quick example text to build on the card title and make up the bulk of the card's content.", text: "Read more", className: "float-end text-danger" },

];

//Blog2
interface blog2 {
    id: number
    src: string
    title: string
    content: String
    button: String
}
export const blogs2: blog2[] = [
    { id: 1, src: "../../../../assets/images/background/20.jpg", title: "Blog title", content: "Some quick example text to build on the card title and make up the bulk of the card's content.", button: "primary" },
    { id: 2, src: "../../../../assets/images/background/23.jpg", title: "Blog title", content: "Some quick example text to build on the card title and make up the bulk of the card's content.", button: "secondary" },
    { id: 3, src: "../../../../assets/images/background/22.jpg", title: "Blog title", content: "Some quick example text to build on the card title and make up the bulk of the card's content.", button: "info" },
    { id: 4, src: "../../../../assets/images/background/25.jpg", title: "Blog title", content: "Some quick example text to build on the card title and make up the bulk of the card's content.", button: "danger" }

];

