import { Avatar, CountAvatar } from "../data/users";
import { getInitialName } from "../utils/plugin";
import { useFeature } from '../store';
import FilterAvatar from "./FilterAvatar";
import PropTypes from 'prop-types';


const UserAvatar = (props) => {
    const [state] = useFeature();

    const getAvatar = Avatar(state.max);
    const countAvatar = CountAvatar();
    // const showInitialName = false;

    return (
        <>
            <FilterAvatar test="props_from_avatar" />
            <b>{props.name} - {props.status}</b>
            <div className="card" style={{ marginTop: 10 }}>
                <div className="card-body">
                    {
                        getAvatar.map((item, i) =>
                            <div className="avatar-stack" key={i}>
                                {
                                    parseInt(i) + 1 === parseInt(state.max) ?
                                        <a href="_" className="avatar-stack-item" title="Users">
                                            <div className={'avatar-stack-item-name avatar-' + state.avaSize}>
                                                +{countAvatar - state.max}
                                            </div>
                                        </a> : <a href="_" className="avatar-stack-item" title={item.name}>
                                            {
                                                state.show === '1' ?
                                                    <img className={'rounded-circle avatar-' + state.avaSize} src={item.avatar} alt="" /> :
                                                    <div className={'avatar-stack-item-name avatar-' + state.avaSize}><h1>{getInitialName(item.name)}</h1></div>
                                            }
                                        </a>
                                }
                            </div>
                        )
                    }
                    <p>
                        <small className="text-muted">
                            Hover over the avatar to see a full name.
                        </small>
                    </p>
                </div>

            </div>
            <div className="card" style={{ marginTop: 10 }}>
                <div className="card-body text-dark" style={{ textAlign: "left"}}>
                    <p>Story Point - Figma</p>
                    <p>
                        We can use card component of bootstrap to make this layout, with the Width is 620px,
                        Height is 330px, Position is Relative and Background is White.</p>
                    <p>
                        Then we can make a new container and put a new class with the following attributes,
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: flex-start;
                        padding: 0px;
                        gap: 10px;
                    </p>
                    <p>
                        on make two child in the div. on the first child we put attributes like this :
                        position: absolute;
                        width: 281px;
                        height: 217px;
                        left: 54px;
                        top: 55px;
                    </p><p>
                        and the second child we put attributes like this :
                        position: absolute;
                        width: 282px;
                        height: 428px;
                        left: 338px;
                        top: -61px;
                    </p>
                    <p>
                    thank you very much for the opportunity. for a while, this is all I can do. Best Regards, Razinal
                    </p>
                </div>
            </div>
        </>);
}


UserAvatar.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string,
};

UserAvatar.defaultProps = {
    status: "Default Prop"
}

export default UserAvatar;