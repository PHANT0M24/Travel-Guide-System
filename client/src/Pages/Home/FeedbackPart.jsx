import PropTypes from 'prop-types';
// import { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
// import { MdDelete } from 'react-icons/md';
// import Swal from 'sweetalert2';
const FeedbackPart = ({ feedback }) => {
    // const [dfeedback, setDfeedback] = useState(feedback)

    // const handleDelete = _id => {
    //     console.log(_id);
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {

    //             fetch(`http://localhost:5000/feedback${_id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your feedback has been deleted.",
    //                             icon: "success"
    //                         });
    //                         const remaining = dfeedback.filter(backs => backs._id !== _id);
    //                         setDfeedback(remaining)
    //                     }
    //                 })
    //         }
    //     });
    // }
    return (
        <div >
            <div className="card transition hover:scale-110 hover:border-primary w-96 h-[230px] shadow-xl bg-green-50">
                <div className="card-body">
                    <h2 className="card-title">
                        {feedback.name}
                    </h2>
                    <p>{feedback.exp}</p>
                    <div className="card-actions justify-end text-2xl">
                        <button><CiEdit></CiEdit></button>
                        {/* <button onClick={() => { handleDelete(feedback._id) }}><MdDelete></MdDelete></button> */}
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