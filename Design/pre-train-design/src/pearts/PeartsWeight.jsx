import '../css/peartsWeight.css';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const peartsWeight = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Weight',
                data: [67, 65, 64, 63, 62, 60],
                borderColor: 'rgba(0, 180, 255, 1)',
                backgroundColor: 'rgba(0, 180, 255, 0.2)',
                fill: false,
                tension: 0.1,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointBackgroundColor: 'rgba(0, 180, 255, 1)',
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
            beginAtZero: true,
            max: 70,
            },
        },
    };

    return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <h1 className="weight-title">Weight</h1>
                <div className="weight-info p-3">
                    <div className="weight-value">
                        60.0 <span className="unit">kg</span>
                    </div>
                    <div className="body-fat">BodyFat: 22.2%</div>
                    <div className="target-weight">TargetWeight: 60.0kg</div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="chart-container">
                    <h5 className="chart-title">Weight transition</h5>
                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
    </div>
    );
}

export default peartsWeight;