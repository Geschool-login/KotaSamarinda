
//NOT EDITABLE!!!
import Topography from "../../components/Topography"
import Hero from "../../components/Hero"
import Footer from "../../components/Footer"

// EDITABLE
import background from "../../assets/img/background.jpg" //Background
import logo from '../../assets/img/logo.png'; //Logo


function pageLayout( props ) {
    //EDITABLE
    const deskripsi = "Selamat datang kembali di"
    const title1 = "Madrasah Jateng"
    const title2 = "Blended Learning"
    const slogan = "Jika orang berpendidikan belum tentu sukses, maka orang tanpa pendidikan akan susah mencapai kesuksesan."
    const copyright = "2021 Madrasah Jateng Blended Learning - Didukung oleh Geschool"

    return (
        <div>
            <Topography />
            <Hero 
                logo={logo}
                background={background}
                deskripsi={deskripsi}
                title1={title1}
                title2={title2}
                slogan={slogan}
                appName={props.appName}
            >
                { props.children }
            </Hero>
            <Footer
                copyright={copyright}
            />
        </div>
    );
}


export default pageLayout;