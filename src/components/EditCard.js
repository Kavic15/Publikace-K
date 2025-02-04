import React, { useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import EditCardNavBar from './EditCardNavBar';

function EditCard({onClose, publicationId}) {
    const buttonRef = useRef(null);

  useEffect(() => {
    const tlacidlo = document.getElementById('EditButtonMain');
    if(tlacidlo) {
        tlacidlo.style.display = "block";
    }
    buttonRef.current.click();
    return () => {
        const tlacidlo = document.getElementById('EditButtonMain');
        if (tlacidlo) {
          tlacidlo.style.display = 'none';
        }
    }
  }, []);

  const handleButtonClick = () => {
    onClose();
    window.location.reload();
  };

  return (
    <div className="modal-container">
    <button ref={buttonRef} type="button" className="btn btn-primary bg-light" data-bs-toggle="modal" data-bs-target="#myModal" id='EditButtonMain'></button>
    <div className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <EditCardNavBar publicationId={publicationId}/>
          <div className="modal-footer">
            <button type="button" className="btn bg-success text-white" data-bs-dismiss="modal" onClick={handleButtonClick}>Zavřít</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default EditCard;

//V publicationCard kliknu na button, ten zavolá EditCard, která se zobrazí po změnění visibility na true
//Při kliknutí na X, hodnota visibility se změní na false
//EditCard nemusí být v App.js, volá ji PublicationCard a tu volá PublicationLoad
//takže stav viditelnosti můžu spravovat v PublicationCard, jelikož pro každou publikaci bude příslušná editCard
//anebo nebude, a podle id publikací se bude upravovat jeden editCard.
//Co je je výhodnější a jednodušší?
//A při kliknutí, zobrazí se nová stránka, nebo jen velká karta?
//nová stránka bude možná jednodušší, karta bude mnohem hezčí, zase ale asi složitější.


//Ta overflow karta se jmenuje modal, vypadá to dobře, ale bude potřeba hodně soustředění a správného katagolování