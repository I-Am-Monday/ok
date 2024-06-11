
import Background from '../../img/img1.jpg';
import Room from '../RoomType/Room';
import Itemhome from './Itemhome';

export default function Home() {
  return (
 <>
    <div>
       <div className='bg-center bg-cover h-96'  style={{backgroundImage: `url(${Background})` } } >
            <nav className=" flex justify-end items-center p-4 ">
              <Itemhome />
            </nav>
        </div>   
           
    </div>    

    <Room />

 </>
  )
}
