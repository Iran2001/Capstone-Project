
import './side.css'
import lg1 from '../../assets/Campuslogo1.jpg';

const side = () => {

  const lgs1 = {
    width: '40%',
    height: '130px',
  };

  return (
    <div className='side-main-main-big-rect'>
      <div className='side-main-rect1'>
        <div className='side-sub-rect2'>
          <div className='main-main-logo'>
            <img src={lg1} alt="Rectangle background image" style={lgs1} className='campus-logo' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default side
