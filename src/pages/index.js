import Layout from '../components/Layout';
import getPhotos from '../data/data.js'
import Photo from '../components/Photo';
import fetch from 'node-fetch';

const Index = (props) => (
    <Layout>
        {
            props.comics.map((comic, key) => <Photo id={key} key={key} data={comic} />)
        }
    </Layout>
);

export const getStaticProps = async () => {
    // Would fetch data
    // Call an external API endpoint to get posts.
    const res = await fetch('https://wea4jmuke6.execute-api.us-east-2.amazonaws.com/Prod/api/v1/comics');
    const comics = await res.json();

    return {
        props: {
            // images: getPhotos(),
            comics: comics.data.results
        }
    }
};

export const sum = (a, b) => (a + b);

export default Index