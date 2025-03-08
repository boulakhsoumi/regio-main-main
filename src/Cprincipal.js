import Navbar from './nav-bar/Navbar.js';
import Animation from './animation/Animation.js';
import Can from './can25/Can.js';
import Concert from './concerts/Concert.js';
import Footer from './tooter/Footer.js';
import ChatLive from "./chat/ChatLive";
export default function Cpricipal(){
    return(
        <div>
        <Navbar/>
        <Animation/>
        <Can/>
        <Concert/>
        <Footer/>
        <ChatLive />
        </div>
    )
}