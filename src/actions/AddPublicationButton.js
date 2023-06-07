import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import AddPublicationModal from 'components/AddPublication';

function AddPublication() {
  // Tady bude modal pro přidání publikace
  return (
    <div className="container-fluid">
      <button
        type="button"
        className="btn bg-success text-white mt-3 mx-2"
        data-bs-toggle="modal"
        data-bs-target="#AddPublicationModal">
        Přidat publikaci
      </button>
      <div className="modal fade" id="AddPublicationModal" role="dialog">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className='modal-header'>
            <h5>Přidání publikace</h5>
            </div>
            <div className='media-body'>
                <AddPublicationModal/>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-success text-white"
                data-bs-dismiss="modal"
              >
                Zavřít
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPublication;