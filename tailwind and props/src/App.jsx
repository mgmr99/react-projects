import "./App.css";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <h1 className="text-white mb-5">Tailwind Component and Props </h1>
      <Navbar />
      <div className="flex mt-5">
        <Card
          name="Madhu"
          btnText="Explore Madhu"
          imgURL="https://scontent.fbwa4-1.fna.fbcdn.net/v/t39.30808-1/319361784_3346887245552251_5522557712698450141_n.jpg?stp=c0.0.160.160a_dst-jpg_p160x160&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sr6h_PedvT4AX9kLbDY&_nc_ht=scontent.fbwa4-1.fna&oh=00_AfDrNK-Sra6Qv_AXZ_einnsCq5d4F6Hpo4Iz_WSe5cPPDg&oe=6537DDC1"
        />
        <Card
          name="Rakesh"
          btnText="Explore Rakesh"
          imgURL="https://scontent.fbwa4-1.fna.fbcdn.net/v/t39.30808-6/318796769_5952403348207789_7799203384386363559_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Q9W0V1xPYaQAX-OJGI0&_nc_ht=scontent.fbwa4-1.fna&oh=00_AfAKV_a9GrsLHz-xN7G11TZUiwBCnYIMUsgix_r3N8if6g&oe=6538F365"
        />
        <Card
          name="Sandeep"
          btnText="Explore Sandeeep"
          imgURL="https://scontent.fbwa4-1.fna.fbcdn.net/v/t39.30808-1/351137729_1470358107042507_4333413763491841708_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XBDkUlRKHK8AX9MDMom&_nc_ht=scontent.fbwa4-1.fna&oh=00_AfBFXJ9D3x_J-xc7S_nQlWdAic4fdgf70-kZhmDoie0jwg&oe=6538CC4B"
        />
      </div>
    </>
  );
}

export default App;
