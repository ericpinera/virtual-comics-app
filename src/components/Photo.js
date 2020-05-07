import CommentsFunctionality from './InteractiveButtons'
import Link from 'next/link'

export default (props) => {
    const image = props.data.thumbnail.path + "/clean." + props.data.thumbnail.extension;
    const title = props.data.title;

    return (
        <div className="photoComponent">
            <div style={{flex: '1 0 auto'}}>
                <Link href={{ pathname: '/photo', query: { id: 0, image: encodeURI(image), title: title} }}>
                    <img src={image} alt=""/>
                </Link>
                <div className="meta">
                    <p className="tagline">{title}</p>
                    <CommentsFunctionality likes={props.data.likes} />
                </div>
            </div>
            <style>{`
                .photoComponent {
                    display: flex;
                    flex-direction: column;
                    width: 29.3333333333%;
                    float: left;
                    margin: 2% 2% 20px 2%;
                    font-size: 1.6rem;
                    background: var(--white);
                    color: #AD0044;
                    box-shadow: -12px 16px 75px -27px rgba(0,0,0,1);
                    margin-bottom: -50px;
                    margin-top: 70px;
                    overflow: auto;
                }
                img{
                    width: 80%;
                    height: 60rem;
                    margin: 10%;
                }
                .tagline{
                    margin-bottom: 20px; // kind of hack
                }
                @media only screen and (max-width: 900px) {
                    img{
                        height: 35rem;
                    }
                    .tagline{
                        font-size: 14px;
                    }
                }
                @media only screen and (max-width: 600px) {
                    img{
                        height: 15rem;
                    }
                    .tagline{
                        font-size: 14px;
                    }
                }
            `}</style>
        </div>
    )
}