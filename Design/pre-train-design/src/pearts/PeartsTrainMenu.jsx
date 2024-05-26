import '../css/peartsTrainMenu.css';

const PeartsTrainMenu = () => {
    return(
        <div className="container mt-5">
            <div className="text-center">
                <h1>Fitness Planner</h1>
            </div>
            <div className=''>
                <input type="text" className="form-control" placeholder="Training overview" />
            </div>
            <div className='float-end'>
                <button className="btn btn-primary">AIトレーナーに任せる</button>
                <br />
                <div className=''>
                    <input type="text" className="form-control text-end" value="date: 2024/05/01"/>
                </div>
            </div>
            <table className="table table-bordered table-hover">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Exercise</th>
                        <th scope="col">Weight/Speed</th>
                        <th scope="col">Rep/Distance</th>
                        <th scope="col">Set</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>チェストプレス</td>
                        <td>35</td>
                        <td>10</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>ラットプルダウン</td>
                        <td>45</td>
                        <td>10</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>スクワット</td>
                        <td>70</td>
                        <td>10</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>ランニング</td>
                        <td>8.0kg</td>
                        <td>5</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>スイム（フリー）</td>
                        <td>-</td>
                        <td>0.05</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PeartsTrainMenu;