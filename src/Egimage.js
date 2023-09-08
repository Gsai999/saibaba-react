import { View, Image, ImageBackground } from 'react-native';

function Egimage() {

    return (
        <View style={{ flex: 1, }}>
            <ImageBackground
                style={{ height: '100%', width: '100%', backgroundColor: 'red' }}
                source={{uri :'https://www.imageshine.in/uploads/sub_category/free-hd-desktop-wallpapers-1920x1080.jpg'}}
                resizeMode="cover">
                <View style={{ flexDirection: 'column' }}>
                    <Image
                        style={{ height: 200, width: '100%' }}
                        source={{uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKH_jlVMomWV3u-_SxJ18pzBtgEiQQ3CSHBQ&usqp=CAU'}}
                        resizeMode="repeat"></Image>

                    <Image
                        style={{ height: 200, width: 100 }}
                        source={{
                            uri: 'https://r1.ilikewallpaper.net/iphone-14-plus-wallpapers/download-110231/Supreme-Mobile-All-HD.jpg',
                        }}
                        resizeMode="repeat"></Image>
                    <Image
                        style={{ height: 100, width: 100 }}
                        source={{
                            uri: 'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/d0e73939aba7e8ac.png?q=100',
                        }}
                        resizeMode="cover"></Image>
                    <Image
                        style={{ height: 200, width: 100 }}
                        source={{ uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbxqQoPiiikoHjGm4z01GXwYRAQeqpIqnPw&usqp=CAU'}}
                        resizeMode="stretch"></Image>
                </View>
            </ImageBackground>

        </View>
    );
}

export default Egimage;