import { useFeature } from '../store';
import PropTypes from 'prop-types';

const FilterAvatar = (props) => {
    // const [show, setShow] = useState('0');
    // const [max, setMax] = useState(5);
    // const [avaSize, setAvaSize] = useState("lg");
    const [state, dispatch] = useFeature();

    const handleChange = event => {
        // setShow(event.target.value);
        dispatch({ type: 'SET_SHOW', payload: event.target.value });
    }

    const handleInputChange = event => {
        // setMax(event.target.value);
        dispatch({ type: 'SET_MAX', payload: event.target.value });
    }
    const handleSelectSize = event => {
        // setAvaSize(event.target.value);
        dispatch({ type: 'SET_AVA_SIZE', payload: event.target.value });
    }

    return (
        <div className="row">
            <div className="col-auto">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="0"
                        checked={state.show === '0'} onChange={handleChange} />
                    <label className="form-check-label">Showing Initial Name</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="1"
                        checked={state.show === '1'} onChange={handleChange} />
                    <label className="form-check-label">Showing Avatar Image</label>
                </div>

                <div className="row">
                    <div className="col-auto">
                        <label className="col-form-label">Max Length Avatar Stack</label>
                    </div>
                    <div className="col-auto">
                        <input type="number" id="inputMax" className="form-control" aria-describedby="maxAvatarHelpInline" value={state.max} onChange={handleInputChange} />
                    </div>


                    <div className="col-auto">
                        <label className="col-form-label">Avatar Size</label>
                    </div>

                    <div className="col-auto">
                        <select className="form-select" aria-label="Default select example" value={state.avaSize} onChange={handleSelectSize}>
                            <option value="xs">xs</option>
                            <option value="sm">sm</option>
                            <option value="md">md</option>
                            <option value="lg">lg</option>
                        </select>
                    </div>
                </div>
                <p>
                    {props.test}
                </p>

            </div>
        </div>
    );
}


FilterAvatar.propTypes = {
    test: PropTypes.string.isRequired,
};


export default FilterAvatar;