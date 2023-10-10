import { Button, FlatList, Text, View } from "react-native";
import { posts } from "../../constants/Posts/posts";
import { Post } from "../../components/PostComponent/Post";
import { StyledSafeArea } from "../../styles/styledSafeArea";

export default function Forum({ navigation }) {
    return (
        <StyledSafeArea>
            <Text>
                Fórum
            </Text>
            <FlatList
                data={posts}
                keyExtractor={(post) => String(post.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Post data={item}/>} />


            <Button title="Área do Agricultor" onPress={() => navigation.navigate('Agricultor')} />


            <Button title="Informatilhos" onPress={() => navigation.navigate('Informativos')} />


            <Button title="Capacitação" onPress={() => navigation.navigate('Capacitação')} />
        </StyledSafeArea>
    )
}