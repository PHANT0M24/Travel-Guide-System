import PropTypes from 'prop-types';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
const FeedbackPart = ({ feedback }) => {

    // const handleDelete = (e) => {
    //     e.preventDefault()
    // }
    return (
        <div >
            <div className="card transition hover:scale-110 hover:border-primary w-96 shadow-xl bg-green-50">
                <div className="card-body">
                    <h2 className="card-title">
                        {feedback.name}
                    </h2>
                    <p>{feedback.exp}</p>
                    <div className="card-actions justify-end text-2xl">
                        <button><CiEdit></CiEdit></button>
                        <button><MdDelete></MdDelete></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackPart;
FeedbackPart.propTypes = {
    feedback: PropTypes.object,
}
