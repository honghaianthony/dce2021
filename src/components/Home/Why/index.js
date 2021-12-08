import React from 'react';
import './Why.css';

// const images = [
//     '/images/home/home-why-img1.jpg',
//     '/images/home/home-why-img2.jpg',
//     '/images/home/home-why-img3.jpg',
//     '/images/home/home-why-img4.jpg',
// ];

function Why() {
    var imageIndex = 0;
    showImages();

    function showImages() {
        var i;
        var images = document.getElementsByClassName('list-why-img');
        var items = document.getElementsByClassName('wrap-why-item');

        for (i = 0; i < images.length; i++) {
            images[i].style.display = 'none';  
        }

        imageIndex++;

        if (imageIndex > images.length) {imageIndex = 1}   

        for (i = 0; i < items.length; i++) {
            items[i].className = items[i].className.replace(' active', ''); 
        }

        for (i = 0; i <images.length; i++) {
            images[imageIndex-1].style.display = 'block'; 
            break; 
        }

        for (i = 0; i <items.length; i++) {
            items[imageIndex-1].className += ' active';
            break;
        }

        setTimeout(showImages, 2000); 
    }

    return (
        <div className='why-container'>
            <h2 className='why-title'>Tại sao nên lựa chọn <br/> DCE?</h2>
            <div className='why-row'>
                {/* Images */}
                <div className='why-img'>
                    <div className='list-why-img fade'>
                        <img src='/images/home/home-why-img1.jpg' alt='Giao diện dễ sử dụng'/>
                    </div>
                    <div className='list-why-img fade'>
                        <img src='/images/home/home-why-img2.jpg' alt='Kho bài học phong phú'/>
                    </div>
                    <div className='list-why-img fade'>
                        <img src='/images/home/home-why-img3.jpg' alt='Cộng đồng đang phát triển'/>
                    </div>
                    <div className='list-why-img fade'>
                        <img src='/images/home/home-why-img4.jpg' alt='Hỗ trợ trực tiếp'/>
                    </div>
                </div>

                {/* Image text*/}
                <div className='why-text'>
                    <div className='list-why-text'>
                        <h4 className='wrap-why-item'>
                            <img src='/images/home/home-why-text1.jpg' alt='Giao diện dễ sử dụng'/>
                            <span>Giao diện dễ sử dụng</span>
                        </h4>
                    </div>
                    <div className='list-why-text'>
                        <h4 className='wrap-why-item'>
                            <img src='/images/home/home-why-text2.jpg' alt='Kho bài học phong phú'/>
                            <span>Kho bài học phong phú</span>
                        </h4>
                    </div>
                    <div className='list-why-text'>
                        <h4 className='wrap-why-item'>
                            <img src='/images/home/home-why-text3.jpg' alt='Kho bài học phong phú'/>
                            <span>Cộng đồng đang phát triển</span>
                        </h4>
                    </div>
                    <div className='list-why-text'>
                        <h4 className='wrap-why-item'>
                            <img src='/images/home/home-why-text4.jpg' alt='Hỗ trợ trực tiếp'/>
                            <span>Hỗ trợ trực tiếp</span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why
