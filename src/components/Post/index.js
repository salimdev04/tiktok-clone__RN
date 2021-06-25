import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Video from 'react-native-video'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'

import styles from './styles'

const Post = (props) => {

    const [post, setPost] = useState(props.post)

    const [paused, setPaused] = useState(false)
    const [isLiked, setIsLiked] = useState(false)

    const onPlayPausePress = () => {
        setPaused(!paused)
    }

    const onLikePress = () => {
        const likesToAdd = isLiked ? -1 : 1
        setPost({
            ...post,
            likes: post.likes + likesToAdd
        })
        setIsLiked(!isLiked)
    }


    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
            <Video
                source={{ uri: post.videoUri }}
                style={styles.video}
                resizeMode="cover"
                    repeat={true}
                    paused={paused}
                />
            </TouchableWithoutFeedback>

            <View style={styles.UIcontainer}>
                <View style={styles.rightContainer}>
                    
                    <Image style={styles.profilePicture} source={{ uri: post.user.imageUri}} />


                    <TouchableOpacity onPress={onLikePress} style={styles.iconContainer}>
                        <AntDesign name="heart" size={40} color={isLiked ? "red" : "white"} />
                        <Text style={styles.statsLabel}>{ post.likes }</Text>
                    </TouchableOpacity>

                    <View style={styles.iconContainer}>
                        <FontAwesome name="commenting" size={40} color="white" />
                        <Text style={styles.statsLabel}>{ post.comments }</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <Fontisto name="share-a" size={35} color="white" />
                        <Text style={styles.statsLabel}>{post.shares}</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View>
                        <Text style={styles.handle}>@{ post.user.username }</Text>
                        <Text style={styles.description}>{ post.description }</Text>

                        <View style={styles.rowSong}>
                            <Entypo name={"beamed-note"} size={30} color="white" />
                            <Text style={styles.songName}>{ post.songName }</Text>
                        </View>
                    </View>

                    <Image style={styles.profilePicture} source={{ uri: post.songImage}} />
                </View>
            </View>
        </View>
    )
}

export default Post
