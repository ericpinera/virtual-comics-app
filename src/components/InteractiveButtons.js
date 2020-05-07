import { MdModeComment, MdFavoriteBorder } from 'react-icons/md'

export default ({likes}) => (
    <div className="meta">
        <a href="/" className="heart"><MdFavoriteBorder />34</a>
        <a href="/"><MdModeComment />{likes}</a>
        <style>{`
        .meta{
            padding: 5px;
            background: var(--light-gray);
            border-top: 1px solid #dce2e4;
            overflow: auto;
        }
        .meta p {
            color: #000000;
            margin: 5px 10px 20px;
            padding-top: 9px;
        }
        .meta a {
            text-decoration: none;
            margin-top: 5px;
            float: left;
            width: 50%;
            text-align: center;
            padding: 9px 0;
            margin-top: 10px;
            // color: var(--blue);
        }
        .meta svg {
            font-size: 1.3rem;
            margin-right: 3px;
        }
        `}</style>
    </div>
)