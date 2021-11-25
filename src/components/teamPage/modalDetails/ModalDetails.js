import React,{useRef} from 'react'
import Button from '../../button/Button'
import './ModalDetails.css'
import useOnClickOutside from '../../../hooks/useOnClickOutside/useOnClickOutside'
import cross from '../../../assets/cross.svg'
const ModalDetails = ({ handleClose, show, children }) => {
    const ref = useRef(null);
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    const btnStyle={
        width: 120
    }
    useOnClickOutside(ref, () => handleClose());
    return (
        <div className={showHideClassName}>
        <section ref={ref} className='modal-main'>
            <img className="close-btn" onClick={handleClose} src={cross}/>
            {children}
            
            <Button style={btnStyle}  type="greenBtn" onClick={handleClose} text="Message"/>
        </section>
        
    </div>
    )
}

export default ModalDetails;
