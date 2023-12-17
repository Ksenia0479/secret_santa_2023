import _ from "lodash";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Quiz from "../../../app/_components/Quiz/Quiz";
import "./quiz.css";
import { Pacifico } from "next/font/google";

const inter = Pacifico({ subsets: ["cyrillic-ext"], weight: "400" });

const questions = [
  {
    id: 1,
    question:
      "Какой из следующих ресурсов необходим для постройки дороги в Колонизаторах?",
    answers: { Шерсть: "sherst", Глина: "glina", Серебро: "serebro" },
    selectedOption: "",
    value: "glina",
    url: "/games/kolonizator.PNG",
  },
  {
    id: 2,
    question: "Как оценивается успешность хода в Диксите?",
    answers: {
      "По количеству карт на руках": "po_kolichestvu_kart_na_rukach",
      "По количеству отгаданных карт": "po_kolichestvu_otgadanych_kart",
      "По количеству отгадавших, но не всех": "no_nie_vsech",
    },
    selectedOption: "",
    value: "no_nie_vsech",
    url: "/games/dixit.jpg",
  },
  {
    id: 3,
    question:
      "Какой персонаж в Цитаделях позволяет игроку стать первым в раунде?",
    answers: { Торговец: "torgoviets", Король: "korol", Судья: "sudja" },
    selectedOption: "",
    value: "korol",
    url: "/games/citadels.jpg",
  },
  {
    id: 4,
    question: "Какие роли могут быть в распределении в начале игры Пандемии?",
    answers: {
      "Доктор и Агент": "doktor_i_agent",
      "Разведчик и Аналитик": "razvedchik_i_analytik",
      "Медик и Исследователь": "medik_i_isledovatel",
    },
    selectedOption: "",
    value: "medik_i_isledovatel",
    url: "/games/pandemic.jpg",
  },
  {
    id: 5,
    question:
      "Какой тип плиты в Каркассоне обязательно должен начинаться в центре поля?",
    answers: { Город: "gorod", Дорога: "doroga", Луг: "lug" },
    selectedOption: "",
    value: "doroga",
    url: "/games/karkasson.jpg",
  },
  {
    id: 6,
    question:
      "Какой компонент игры Билет на Поезд имеет дополнительные баллы при завершении маршрута?",
    answers: { Вагоны: "vagony", Станции: "stancii", Локомотивы: "lokomotivy" },
    selectedOption: "",
    value: "stancii",
    url: "/games/santa_fe_rails.jpg",
  },
  {
    id: 7,
    question: "Какой ход может совершить дамка в шашках?",
    answers: {
      "Только вперед": "tolko_vpered",
      "Вперед и назад": "vpered_i_nazad",
      "Только по диагонали": "tolko_po_diagonali",
    },
    selectedOption: "",
    value: "vpered_i_nazad",
    url: "/games/sashki.jpg",
  },
];

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
  width: "580px",
  height: "580px",
  backgroundColor: "#000000bf",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontSize: "24px",
  textAlign: "center",
};

const QuizPage = ({ data: { question, id } }) => {
  const [data, setData] = useState({});
  const [quizResult, setQuizResult] = useState({});
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [totalRightAnswers, setTotalRightAnswers] = useState(0);
  const [count, setCount] = useState(8);

  const parsedId = parseInt(id, 10);

  const openModalHandle = () => setOpen(true);

  // const closeModalHandle = () => setOpen(false);

  const goBackHandler = () => {
    if (parsedId === 1) {
      router.push(`/`);
    } else {
      router.push(`/quiz/${parsedId - 1}`);
    }
  };

  const checkResult = () => {
    const savedData = localStorage.getItem("quizResult");
    const deserializedData = JSON.parse(savedData);
    let totalAnswers = 0;

    const checkedResult = _.reduce(
      questions,
      (res, q) => {
        if (deserializedData[q.id] === q.value) {
          totalAnswers += 1;
          setTotalRightAnswers((prevState) => (prevState += 1));
          return { ...res, [q.id]: [q.value, true] };
        } else {
          return { ...res, [q.id]: [deserializedData[q.id], false] };
        }
      },
      {}
    );
    return { checkedResult, totalAnswers };
  };

  const updateCountdown = () => {
    if (count > 0) {
      setCount((prevState) => (prevState -= 1));
      setTimeout(updateCountdown, 1000);
    }
  };

  const goForwardHandler = () => {
    if (parsedId === questions.length) {
      openModalHandle();
      const res = checkResult();
      if (res.totalAnswers >= 2) {
        updateCountdown();
        setTimeout(() => {
          router.push(`/final`);
          closeModalHandle();
        }, 7000);
      }
    } else {
      router.push(`/quiz/${parsedId + 1}`);
    }
  };

  const handleOptionChange = (event) => {
    if (event.target.value) {
      setData((prevState) => ({
        ...prevState,
        selectedOption: event.target.value,
      }));
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem("quizResult");
    const deserializedData = JSON.parse(savedData);

    setData((prevState) => ({
      ...prevState,
      ...question,
      selectedOption: (deserializedData ? deserializedData[id] : "") || "", // check this
    }));
  }, [question]);

  useEffect(() => {
    if (data.selectedOption) {
      setQuizResult((prevState) => ({
        ...prevState,
        [id]: data.selectedOption,
      }));
    }
  }, [data]);

  useEffect(() => {
    if (!_.isEmpty(quizResult)) {
      const savedData = localStorage.getItem("quizResult");
      const deserializedData = JSON.parse(savedData);
      const serializedObject = JSON.stringify({
        ...deserializedData,
        ...quizResult,
      });
      localStorage.setItem("quizResult", serializedObject);
    }
  }, [quizResult]);

  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ animation: "fadeIn 5s ease-out" }}
        className={inter.className}
      >
        <Box sx={style}>
          <Typography
            className={inter.className}
            id="modal-modal-title"
            variant="div"
            style={{ fontSize: "3rem" }}
          >
            Юхуууу!
          </Typography>
          <Typography
            className={inter.className}
            id="modal-modal-description"
            sx={{ mt: 3 }}
            variant="div"
            style={{ fontSize: "1.5rem", marginTop: "10px" }}
          >
            {`${totalRightAnswers}/7 вопросов были отвечены правильно!`}
          </Typography>
          <Typography
            className={inter.className}
            id="modal-modal-description"
            sx={{ mt: 3 }}
            variant="div"
            style={{ fontSize: "1.5rem", marginTop: "5px" }}
          >
            Через
          </Typography>
          <Typography
            className={inter.className}
            style={{
              margin: "0",
              fontSize: "15rem",
              lineHeight: "0.6",
              marginBottom: "30px",
            }}
            id="modal-modal-description"
            sx={{ mt: 3 }}
            variant="div"
          >
            {count}
          </Typography>
          <Typography
            className={inter.className}
            id="modal-modal-description"
            sx={{ mt: 3 }}
            variant="div"
            style={{ fontSize: "1.5rem", marginTop: "15px" }}
          >
            Ты узнаешь, какой подарок тебя ожидает!
          </Typography>
        </Box>
      </Modal>
      <Quiz
        question={data}
        goBackHandler={goBackHandler}
        goForwardHandler={goForwardHandler}
        handleOptionChange={handleOptionChange}
      />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const res = _.find(questions, ["id", parseInt(id, 10)]);
  const question = res;

  return {
    props: {
      data: { question, id },
    },
  };
};

export default QuizPage;
