import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/MainPageStyle.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRaccolteAction } from "../redux/actions";

const MainPage = () => {
  const raccolte = useSelector((state) => state.raccolte.content);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getAllRaccolteAction());
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div class="container">
      <div class="row">
        {raccolte &&
          raccolte.content.map((racc) => (
            <div class="col bg-warning">
              <div class="card">
                <div class="card-body">
                  <div class="card-title">{racc.nome}</div>
                  <ul class="list-group">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                    <li class="list-group-item">Porta ac consectetur ac</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainPage;
