import image1 from "../public/DSC_0834.jpg";
import image3 from "../public/11072020-DSC_0453.jpg";
import image5 from "../public/DSC_0227.jpg";
import image6 from "../public/CSC_0814.jpg";
import image7 from "../public/DSC_0666-2.jpg";
import image8 from "../public/DSC_0772.jpg";
import image9 from "../public/DSC_0786.jpg";
import Footer from "./Footer";
import Photo from "./Photo";



const Album = () => {



  return (

    <div>

      <div className="min-h-screen flex items-center">
  <div className="flex-1 mx-10 md:mx-20">
    <div className="container mx-auto mb-10">

<Photo/>


      <ul className="grid grid-cols-4 md:grid-cols-6 grid-rows-5 md:grid-rows-4 gap-3 md:gap-3 grid-flow-row-dense">
        <li className="col-span-4 md:col-span-3 bg-custom-img1 rounded-lg shadow-xl h-44 md:h-96" 
        style={{ backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
         }}>
        </li>
        <li className="col-span-4 md:col-span-2 bg-custom-img2 rounded-lg shadow-xl h-44 md:h-96"
         style={{ backgroundImage: `url(${image9})`,
         backgroundSize: "cover" }}>
        </li>
        <li className="col-span-4 md:col-span-1 bg-custom-img3 rounded-lg shadow-xl h-44 md:h-96"
        style={{ backgroundImage: `url(${image6})`,
        backgroundSize: "cover",
        backgroundPosition: "30%, 70%" }}>

        </li>

        <li className="col-span-4 md:col-span-2 bg-custom-img3 rounded-lg shadow-xl h-44 md:h-96"
        style={{ backgroundImage: `url(${image5})`,
        backgroundSize: "cover" ,
        backgroundPosition: "center" }}>

        </li>

        <li className="col-span-4 md:col-span-4 bg-custom-img1 rounded-lg shadow-xl h-44 md:h-96" 
        style={{ backgroundImage: `url(${image7})`,
        backgroundSize: "cover" }}>
        </li>
 
    

        <li className="col-span-4 md:col-span-3 bg-custom-img1 rounded-lg shadow-xl h-44 md:h-96" 
        style={{ backgroundImage: `url(${image8})`,
        backgroundSize: "cover" }}>
        </li>
        <li className="col-span-4 md:col-span-3 bg-custom-img2 rounded-lg shadow-xl h-44 md:h-96"
         style={{ backgroundImage: `url(${image9})`,
         backgroundSize: "cover" }}>
 </li>

 <li className="col-span-4 md:col-span-4 bg-custom-img1 rounded-lg shadow-xl h-44 md:h-96" 
        style={{ backgroundImage: `url(${image1})`,
        backgroundSize: "cover" }}>
        </li>

        <li className="col-span-4 md:col-span-2 bg-custom-img3 rounded-lg shadow-xl h-44 md:h-96"
        style={{ backgroundImage: `url(${image3})`,
        backgroundSize: "cover" }}>

        </li>
      </ul>
    </div>
  </div>
</div>

<Footer/>
    </div>

  );
};

export default Album;
