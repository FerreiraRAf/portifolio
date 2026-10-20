// Css
import './Carrosel.css';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//Mui
import Card from './CardMedia.jsx';


function Carrosel({ itens }) {

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
                700: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
            }}
            className="carrosel-swiper"
        >
            {itens.map((item, index) => (
                <SwiperSlide key={index}>
                    <Card
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        site={item.site}
                        buttonGit="Github"
                        buttonText="Site"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Carrosel