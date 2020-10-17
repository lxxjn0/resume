module.exports = {

    author: "@junyounglee",
    siteTitle: "Junyoung Lee - Resume",
    siteShortTitle: "Junyoung Lee.", // Used as logo text in header, footer, and splash screen
    siteDescription: "Hi there! I'm Junyoung Lee, junior web back-end developer based in Seoul",
    siteUrl: "https://lxxjn0-resume.netlify.app//",
    siteLanguage: "ko_KR",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: true, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantin.muenster",
    shownArticles: 3,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Github",
            url: "https://github.com/lxxjn0"
        },
        {
            name: "Blog",
            url: "https://lxxjn0-dev.netlify.app/"
        },
    ],
  
    navLinks: {
        menu: [
            // {
            //     name: "Articles",
            //     url: "/#articles",
            // },
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Skill & Interest",
                url: "/#interests"
            },
            {
                name: "Projects",
                url: "/#projects",
            }
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        // {
        //     name: "Privacy",
        //     url: "/privacy"
        // },
        // {
        //     name: "Imprint",
        //     url: "/imprint"
        // }
    ]
}