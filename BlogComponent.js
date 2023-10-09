    export default function BlogComponent()
    {
    const blogObj=[
        {
            id:1,
            title:"Why journey is important",
            author:"Luca",
            //content:"A journey, whether it's a physical voyage or a metaphorical one, holds significance for several reasons.Journeys often involve new experiences, challenges, and encounters that push individuals out of their comfort zones. These encounters lead to personal growth, learning, and development. Facing obstacles and overcoming them can help people acquire new skills, gain confidence, and develop a deeper understanding of themselves and the world around them.Journeys create memories and experiences that can last a lifetime. These memories often become cherished stories and anecdotes that people share with others, enhancing their sense of identity and the richness of their lives.",
            img:"https://e0.pxfuel.com/wallpapers/478/36/desktop-wallpaper-travel-travel-agency-thumbnail.jpg",
            htmlDoc:"journey.html"
        },
        {
            id:2,
            title:"Benefits of being an entrepreneur",
            author:"Bella",
            //content:"Becoming an entrepreneur can be a rewarding and fulfilling endeavor, offering a wide range of benefits. While entrepreneurship comes with its challenges and risks, the potential advantages often make it an attractive path for many individuals. Successful entrepreneurs have the potential to earn substantial profits and build wealth. They can benefit from the financial success of their ventures, which can lead to a higher income and a better quality of life. Entrepreneurs have the freedom to make their own decisions and set their own direction. They are not bound by the rules and regulations of a traditional corporate structure, allowing for greater autonomy in how they run their business. ",
            img:"https://m.economictimes.com/thumb/msid-63356566,width-1200,height-900,resizemode-4,imgsize-71153/entrepreneur.jpg",
            htmlDoc:"entrepreneur.html"
        },
        {
            id:3,
            title:"Happiness of Food",
            author:"Sirus",
            //content:" Many people associate certain foods with comfort and nostalgia. These comfort foods can evoke positive emotions and provide a sense of well-being. For example, a warm bowl of chicken soup on a cold day or a favorite childhood dessert can bring feelings of happiness and contentment. Practicing mindfulness while eating can enhance the enjoyment of food and promote happiness. Paying attention to the flavors, textures, and aromas of each bite can lead to a more pleasurable eating experience. Certain foods are associated with happy memories and positive experiences. Recreating or enjoying these foods can evoke feelings of nostalgia and happiness.While emotional eating is not always healthy, some individuals find temporary relief from stress or sadness by indulging in their favorite foods. However, it's important to practice mindful and balanced eating habits to avoid negative consequences.",
            img:"https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696723200&semt=ais",
            htmlDoc:"food.html"
        },
        {
            id:4,
            title:"Best parenting blog",
            author:"Pluto",
            //content:"Parenting is a complex and deeply personal journey, and what constitutes 'best' parenting can vary greatly from one family to another. However, there are some principles and practices that are generally considered beneficial for raising happy, healthy, and well-adjusted children.Children thrive when they feel loved, valued, and supported by their parents. Providing unconditional love and acceptance creates a strong foundation for their emotional well-being.Rather than solving every problem for your child, teach them problem-solving skills. Encourage them to think critically, make decisions, and learn from their mistakes. Reinforce positive behavior with praise and encouragement. Focusing on your child's strengths and achievements can boost their self-esteem and motivation.",
            img:"https://images.ctfassets.net/hrltx12pl8hq/2r7WVYg84lwLgcUl7GWVe2/ce027d3996670c82202a578cf4d57412/parenthood-images.jpg?fit=fill&w=600&h=400",
            htmlDoc:"parenting.html"
        }
    ];
    const mappedObj=blogObj.map(blog=>
        <ul class="ulclass">
            <li key={blog.id}>
                <b><a href={blog.htmlDoc} alt="blog">{blog.title}</a></b><br/>
                ~{blog.author}<br/><br/>
                <br/> 
                <img src={blog.img} height="200px" width="500px"/>
                <br/><br/><br/><br/>
            </li>
        </ul>);
    return(
        <h1>{mappedObj}</h1>
    );
    }