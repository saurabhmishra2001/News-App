import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles =[
        {
        "source": {
        "id": null,
        "name": "KCRA Sacramento"
        },
        "author": "Greta Serrin",
        "title": "Folsom native identified as third Washington, DC lightning strike victim - KCRA Sacramento",
        "description": "One of the three people who died in a Washington, D.C., lightning strike this week has been identified by family as Northern California native Brooks Lambertson.",
        "url": "https://www.kcra.com/article/dc-lightning-strike-victim-identified-folsom-native/40825605",
        "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/brooks-lambertson-1659838358.png?crop=1.00xw:0.790xh;0,0.130xh&resize=1200:*",
        "publishedAt": "2022-08-07T06:07:00Z",
        "content": "One of the three people who died in a Washington, D.C., lightning strike this week has been identified by family as Northern California native Brooks Lambertson. \r\nThe 29-year-old from Folsom died fr… [+1195 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Jason Owens",
        "title": "Sabrina Ionescu sets new WNBA standard for points, rebounds, assists in a season - Yahoo Sports",
        "description": "The latest statistical milestone for Ionescu most certainly won't be her last",
        "url": "https://sports.yahoo.com/sabrina-ionescu-sets-new-wnba-standard-for-points-rebounds-assists-in-a-season-044131138.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/CyzMoZu9HyqEaJkuXVu4qg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-08/19d376d0-14d2-11ed-becf-e2766ca16de1",
        "publishedAt": "2022-08-07T05:41:00Z",
        "content": "Sabrina Ionescu has done it again.\r\nThe New York Liberty star etched her name into the record books one more time on Saturday, this time for a season-long accomplishment.\r\nIn the opening minute again… [+2370 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "Jamahal Hill Octagon Interview | UFC Vegas 59 - UFC - Ultimate Fighting Championship",
        "description": null,
        "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DgacUhLopn4w",
        "urlToImage": null,
        "publishedAt": "2022-08-07T05:12:43Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "Fox Business"
        },
        "author": "Ken Martin",
        "title": "Warren Buffett's Berkshire reports $44B loss as value of investments falls - Fox Business",
        "description": "Warren Buffett's Berkshire Hathaway suffered a $44 billion loss as a rocky quarter for the markets sent shares of the company's investments lower.",
        "url": "https://www.foxbusiness.com/markets/warren-buffetts-berkshire-reports-44b-loss-value-investments-falls",
        "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2019/05/0/0/buffett-video-thumbnail.jpg?ve=1&tl=1",
        "publishedAt": "2022-08-07T05:12:01Z",
        "content": "Warren Buffett’s Berkshire Hathaway reported a $43.76 billion loss in the second quarter as the value of the company's investments plummeted, in what was a tumultuous quarter for the markets.\r\nBerksh… [+3258 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "Flooding in Death Valley strands drivers, hotel guests - CBS Los Angeles",
        "description": "Around 1,000 got trapped inside Death Valley National Park this weekend after a monsoonal storm drenched the area with rain.",
        "url": "https://www.youtube.com/watch?v=6Vq8Exyyi0Q",
        "urlToImage": "https://i.ytimg.com/vi/6Vq8Exyyi0Q/hqdefault.jpg",
        "publishedAt": "2022-08-07T05:11:41Z",
        "content": null
        },
        {
        "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "Top fighter, several children killed as Israel bombs Gaza - Al Jazeera English",
        "description": "A second Islamic Jihad commander killed in Gaza as Israel attacks the Palestinian enclave for a second day.",
        "url": "https://www.aljazeera.com/news/2022/8/7/six-palestinian-children-killed-as-israel-attacks-gaza",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/08/h_57848482.jpg?resize=1200%2C630",
        "publishedAt": "2022-08-07T04:29:16Z",
        "content": "A senior commander of a Palestinian armed group and several children have been killed in the Gaza Strip as Israeli jets bombed the besieged enclave for a second day.\r\nIn a statement on Sunday, Islami… [+5460 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "By Keith Allen and Nouran Salahieh, CNN",
        "title": "Airlines cancel more than 600 US flights and delay thousands more Saturday - CNN",
        "description": "More than 600 flights were canceled and thousands more were delayed in the United States on Saturday, according to the flight tracking website FlightAware.",
        "url": "https://www.cnn.com/travel/article/saturday-hundreds-of-flights-canceled/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220806235516-american-airlines-dca-file-super-tease.jpg",
        "publishedAt": "2022-08-07T04:23:29Z",
        "content": "(CNN) More than 600 flights were canceled and thousands more were delayed in the United States on Saturday, according to the flight tracking website FlightAware.\r\nSaturday marks the third day of majo… [+2127 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "WLWT Cincinnati"
        },
        "author": "WLWT Digital Staff",
        "title": "Police: 4 dead in Butler Township shooting; suspect arrested after multistate manhunt - WLWT Cincinnati",
        "description": "At least four people have died after a shooting was reported in Butler Township in Dayton, Ohio, police said.",
        "url": "https://www.wlwt.com/article/police-investigating-deadly-shooting-dayton-multiple-dead/40820654",
        "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/steven-alexander-marlow-1659730276.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        "publishedAt": "2022-08-07T04:12:00Z",
        "content": "DAYTON, Ohio —Four people are dead and a murder suspect has been arrested after a shooting in Dayton, Ohio, according to Butler Township Police.\r\nPolice were called to the 7200 block of Hardwicke Pla… [+1264 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "Anne Heche 'stable' after fiery Mar Vista car crash, rep says | ABC7 - ABC7",
        "description": null,
        "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoZhzkgw1p8c",
        "urlToImage": null,
        "publishedAt": "2022-08-07T04:00:14Z",
        "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
        "source": {
        "id": "cbs-news",
        "name": "CBS News"
        },
        "author": null,
        "title": "Russia begins new assault on 2 cities in Ukraine's Donetsk region - CBS News",
        "description": "Bakhmut and Avdiivka have been considered key targets of Russia's ongoing offensive across Ukraine's east.",
        "url": "https://www.cbsnews.com/news/russia-assault-2-cities-ukraine-donetsk-region-bakhmut-avdiivka/",
        "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2022/08/07/13b85e18-cd47-4701-84bd-b221b140f3af/thumbnail/1200x630/a260f0ac37d6886125c719302cb69eeb/gettyimages-1242335423.jpg",
        "publishedAt": "2022-08-07T02:30:36Z",
        "content": "Russian forces began an assault Saturday on two key cities in the eastern Donetsk region and kept up rocket and shelling attacks on other Ukrainian cities, including one close to Europe's largest nuc… [+3290 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Raja Razek and Christina Maxouris, CNN",
        "title": "A fourth Muslim man was killed in Albuquerque after authorities said 3 similar killings may be connected - CNN",
        "description": "Authorities in Albuquerque, New Mexico, announced Saturday a fourth Muslim man was killed overnight and there is \"reason to believe\" his death is related to three other recent killings of Muslim men.",
        "url": "https://www.cnn.com/2022/08/06/us/albuquerque-muslim-men-four-killings/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220806191112-albuquerque-muslim-men-four-killings-super-tease.jpg",
        "publishedAt": "2022-08-07T02:25:00Z",
        "content": "(CNN)Authorities in Albuquerque, New Mexico, announced Saturday a fourth Muslim man was killed overnight and there is \"reason to believe\" his death is related to three other recent killings of Muslim… [+3316 chars]"
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": null,
        "title": "Trump outlines preferred policies if GOP retakes Congress in CPAC speech - The Hill",
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMid2h0dHBzOi8vdGhlaGlsbC5jb20vaG9tZW5ld3MvY2FtcGFpZ24vMzU5MTMxMS10cnVtcC1vdXRsaW5lcy1wcmVmZXJyZWQtcG9saWNpZXMtaWYtZ29wLXJldGFrZXMtY29uZ3Jlc3MtaW4tY3BhYy1zcGVlY2gv0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2022-08-07T02:18:00Z",
        "content": null
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Senate Democrats battle to pass $430 billion climate, drug bill - Reuters",
        "description": "The U.S. Senate on Saturday began debating a Democratic bill to address key elements of President Joe Biden's agenda - tackling climate change, lowering the costs of medication for the elderly and energy, while forcing corporations and the wealthy to pay more…",
        "url": "https://www.reuters.com/world/us/us-senate-democrats-push-ahead-430-billion-drug-energy-bill-2022-08-06/",
        "urlToImage": "https://www.reuters.com/resizer/ppyZvgtqVBBChKsp2plHXhgUV8Y=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TK2OQ6YORBMJBBK4HQ6GL2424M.jpg",
        "publishedAt": "2022-08-07T01:38:00Z",
        "content": "WASHINGTON, Aug 6 (Reuters) - The U.S. Senate on Saturday began debating a Democratic bill to address key elements of President Joe Biden's agenda - tackling climate change, lowering the costs of med… [+5318 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Eonline.com"
        },
        "author": "Ashley Joy Parker",
        "title": "Pete Davidson Makes a Fashion Statement Following Kim Kardashian Breakup - E! Online - E! NEWS",
        "description": "One day after the news broke that Kim Kardashian and Pete Davidson called it quits, the former SNL star was spotted on set in Australia wearing a t-shirt with an interesting message on it.",
        "url": "https://www.eonline.com/news/1341093/pete-davidson-makes-a-fashion-statement-following-kim-kardashian-breakup",
        "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2022421/rs_1200x1200-220521164817-1200-pete-davidson-snl.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
        "publishedAt": "2022-08-07T00:17:00Z",
        "content": "Pete Davidson is letting his outfit do the talking.\r\nOn Aug, 6, the former Saturday Night Live star was photographed for the first time since the news broke that he and girlfriend Kim Kardashian spli… [+704 chars]"
        },
        {
        "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
        },
        "author": "Praveena Somasundaram",
        "title": "IAEA warns of 'nuclear disaster' from shelling of Zaporizhzhia reactor - The Washington Post",
        "description": "The International Atomic Energy Agency director general urged Russia and Ukraine to allow a mission of experts access to the facility to help secure it.",
        "url": "https://www.washingtonpost.com/world/2022/08/06/iaea-nuclear-disaster-ukraine-zaporizhzhia/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YM5BLTQVX4I63BECA3A4QTHI6I.jpg&w=1440",
        "publishedAt": "2022-08-07T00:00:00Z",
        "content": "Comment on this story\r\nThe United Nations nuclear chief warned of a potential nuclear disaster after shelling of Europes largest atomic power plant, once again urging Russia and Ukraine to allow a mi… [+4280 chars]"
        },
        {
        "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
        },
        "author": "Amber Phillips, Tom Hamburger",
        "title": "Indiana adopts restrictive abortion law, prompting economic fallout - The Washington Post",
        "description": "",
        "url": "https://www.washingtonpost.com/nation/2022/08/06/indiana-abortion-law/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/QASJZ3QVJEI63BECA3A4QTHI6I.jpg&w=1440",
        "publishedAt": "2022-08-06T23:51:08Z",
        "content": "Comment on this story\r\nIndianas new sweeping ban on abortion produced immediate political and economic fallout Saturday, as some of the states biggest employers objected to the restrictions, Democrat… [+9906 chars]"
        },
        {
        "source": {
        "id": "politico",
        "name": "Politico"
        },
        "author": null,
        "title": "Warnings of destruction at 77th Hiroshima memorial amid Russia threat - POLITICO",
        "description": "“Nuclear weapons are nonsense,” said U.N. Secretary-General Antonio Guterres.",
        "url": "https://www.politico.com/news/2022/08/06/hiroshima-nuclear-weapons-russia-ukraine-00050217",
        "urlToImage": "https://static.politico.com/31/71/8d76924248958b20b0562bcbd48a/https-delivery.gettyimages.com/downloads/1413234558",
        "publishedAt": "2022-08-06T23:12:05Z",
        "content": "The United States dropped the worlds first atomic bomb on Hiroshima on Aug. 6, 1945, destroying the city and killing 140,000 people. It dropped a second bomb three days later on Nagasaki, killing ano… [+4008 chars]"
        },
        {
        "source": {
        "id": "nfl-news",
        "name": "NFL News"
        },
        "author": "Coral Smith",
        "title": "Saints WR Michael Thomas (ankle) participates in team drills Saturday - NFL.com",
        "description": "NFL Network Insider Ian Rapoport reported that Michael Thomas participated in team drills during the Saints' practices Saturday, noting that Thomas is a \"full-go\" in training camp.",
        "url": "https://www.nfl.com/news/saints-wr-michael-thomas-participates-in-team-drills-saturday",
        "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/knrq1pjmtscercenkk2x",
        "publishedAt": "2022-08-06T22:55:00Z",
        "content": "Michael Thomas hasn't played in an NFL game since January of 2021, but reports from training camp suggest the wide receiver has completed a crucial step in the long process of getting back on the fie… [+2306 chars]"
        },
        {
        "source": {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": "https://www.engadget.com/about/editors/igor-bonifacic",
        "title": "Physicist trolls James Webb Space Telescope fans with a photo of a chorizo sausage - Engadget",
        "description": "The James Webb Space Telescope was recently the subject of a not-so-charming prank..",
        "url": "https://www.engadget.com/james-webb-space-telescope-chorizo-photo-222957990.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-12/20af84d0-6749-11ec-bdf5-c01480754637",
        "publishedAt": "2022-08-06T22:34:26Z",
        "content": "With its captivating images of far-flung galaxies, its safe to say the James Webb Space Telescope\r\n has captured the imagination of the world over. It was also recently the subject of a not-so-charmi… [+1581 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "WCTV"
        },
        "author": "WCTV Staff",
        "title": "First monkeypox case confirmed in Leon County - WCTV",
        "description": "DOH Leon said Saturday that is has identified the first monkeypox case in a Leon County resident.",
        "url": "https://www.wctv.tv/2022/08/06/first-monkeypox-case-confirmed-leon-county/",
        "urlToImage": "https://gray-wctv-prod.cdn.arcpublishing.com/resizer/raJgnyNsTap6X8W8kFrPqNztRh4=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/K6LPFJZ4ORHEFIRJMICYXE527Y.png",
        "publishedAt": "2022-08-06T22:30:00Z",
        "content": "TALLAHASSEE, Fla. (WCTV) - The Florida Department of Health in Leon County has confirmed its first monkeypox infection in a county resident, according to a news release.\r\nDOH Leon said Saturday that … [+431 chars]"
        }
        ]
    constructor(){
        super();
        console.log('News Component Constructor')
        this.state={
            articles:this.articles,
            loading:false
           
        }
    }
  render() {
    return (
            <div className='container my-3 '>
              <h2>Picture News -Top Headlines</h2>
              <div className='row'>
                 {this.state.articles.map((element)=> {
                    return <div className='col md-4'  key={element.url}>
                        <NewsItem title={element.title.slice(0, 45)} description ={element.description} imageUrl={element.urlToImage} className="card-img-top" 
                            alt="This is Picture Image" newsUrl={element.url}/>
                    </div>
               
                    } )}    
                </div>
            </div>
        );
    } 
}  
        
 

export default News