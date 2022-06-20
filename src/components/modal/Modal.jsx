export function Modal(props) {


    return(
            <div className='modal_pg'>
                <div className="modal_type">
                    <div className="modal_box">
                        <h1 className='modal_txt'></h1>
                        <button className='close_btn'><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className='confirm_btns'>
                        <button className='cancel_btn'><i className="fa-solid fa-xmark"></i></button>
                        <button className='ok_btn'><i className="fa-solid fa-check"></i></button>
                    </div>
                </div>
            </div>
    )
}