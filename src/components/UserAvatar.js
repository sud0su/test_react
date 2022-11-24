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