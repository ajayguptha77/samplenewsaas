import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, Title, BarController } from 'chart.js';

interface BarGraphProps {
  id: { details: { id: string } };
}

const BarGraph: React.FC<BarGraphProps> = (props) => {
  const API_URL = process.env.REACT_APP_API_MID_URL;

  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null); // Store the Chart instance

  useEffect(() => {
    async function provInfo() {
      const ctx = chartRef.current?.getContext('2d');
      if (!ctx) return;

      let getStudentExams = await fetch(
        API_URL + `/examAns/getQuesAns/${props.id.details.id}`
      );
      let getExamsDetails = await getStudentExams.json();

      let topics: string[] = [];
      let marks: number[] = [];
      let total: number[] = [];
      for (var i = 0; i < getExamsDetails.length; i++) {
        marks.push(getExamsDetails[i].correctMrks);
        total.push(getExamsDetails[i].totalMarks);
        let getExam = await fetch(
          API_URL + `/exam/viewExamById/${getExamsDetails[i].exam_id}`
        );
        let Exam = await getExam.json();
        topics.push(Exam.examName);
      }

      // Destroy the previous Chart instance
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      Chart.register(CategoryScale, LinearScale, BarElement, Title, BarController);
      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: topics,
          datasets: [
            {
              label: 'Scored Marks',
              data: marks,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
            {
              label: 'Total Marks',
              data: total,
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
            x: {
              type: 'category',
              offset: true,
            },
          },
        },
      });

      // Store the new Chart instance
      chartInstanceRef.current = chart;
    }
    provInfo();
  }, [props.id.details.id]);

  return (
    <div>
      <div className='row'>
        <div className='col-md-1 mt-1'>
          <div
            style={{
              width: '15px',
              height: '15px',
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              float: 'right',
            }}
          ></div>
        </div>
        <div className='col-md-2 text-left p-0' style={{ float: 'left' }}>
          Scored Marks
        </div>
      </div>
      <div className='row'>
        <div className='col-md-1 mt-1'>
          <div
            style={{
              width: '15px',
              height: '15px',
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
              float: 'right',
            }}
          ></div>
        </div>
        <div className='col-md-2 text-left p-0' style={{ float: 'left' }}>
          Total Marks
        </div>
      </div>
      <br />
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarGraph;
