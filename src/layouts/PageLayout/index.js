
//NOT EDITABLE!!!
import Topography from "../../components/Topography"
import Hero from "../../components/Hero"
import Footer from "../../components/Footer"

// EDITABLE
import background from "../../assets/img/background.jpg" //Background
import backgroundMobile from "../../assets/img/backgroundM.jpg" //BackgroundMobile
import logo from '../../assets/img/logo.png'; //Logo


function pageLayout( props ) {
    //EDITABLE
    const deskripsi = "Selamat datang kembali di"
    const title1 = "Padang Pariaman"
    const title2 = "Blended Learning"
    const slogan = "Jika kau menginginkan sesuatu dalam hidupmu yang tak pernah kau punya. Kau harus melakukan sesuatu yang belum pernah kau lakukan. "
    const copyright = "2022 Padang Pariaman Blended Learning - Didukung oleh Geschool"

    return (
        <div>
            <Topography />
            <Hero 
                logo={logo}
                background={background}
                backgroundMobile={backgroundMobile}
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