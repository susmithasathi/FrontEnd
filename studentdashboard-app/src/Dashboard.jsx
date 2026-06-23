import {
  useState,
  useRef,
  useReducer,
  useEffect,
  useMemo,
  useCallback
} from "react";

import { subjectReducer } from "./SubjectReducer";

function Dashboard() {

  const inputRef = useRef();

  const [subject, setSubject] = useState("");

  const [subjects, dispatch] = useReducer(
    subjectReducer,
    [],
    () => {
      const saved = localStorage.getItem("subjects");
      return saved ? JSON.parse(saved) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addSubject = useCallback(() => {

    if (subject.trim() === "") return;

    dispatch({
      type: "ADD",
      payload: subject
    });

    setSubject("");
    inputRef.current.focus();

  }, [subject]);

  const deleteSubject = useCallback((id) => {
    dispatch({
      type: "DELETE",
      payload: id
    });
  }, []);

  const completeSubject = useCallback((id) => {
    dispatch({
      type: "COMPLETE",
      payload: id
    });
  }, []);

  const stats = useMemo(() => {

    const total = subjects.length;

    const completed =
      subjects.filter(s => s.completed).length;

    const pending = total - completed;

    return { total, completed, pending };

  }, [subjects]);

  return (
    <div>

      <h1>Study Dashboard</h1>

      <input
        ref={inputRef}
        value={subject}
        placeholder="Enter subject"
        onChange={(e) => setSubject(e.target.value)}
      />

      <button onClick={addSubject}>
        Add
      </button>

      <h3>Total : {stats.total}</h3>
      <h3>Completed : {stats.completed}</h3>
      <h3>Pending : {stats.pending}</h3>

      <ul>
        {subjects.map((sub) => (
          <li key={sub.id}>

            <span
              style={{
                textDecoration:
                  sub.completed ? "line-through" : "none"
              }}
            >
              {sub.name}
            </span>

            <button
              onClick={() => completeSubject(sub.id)}
            >
              Complete
            </button>

            <button
              onClick={() => deleteSubject(sub.id)}
            >
              Delete
            </button>

          </li>
        ))}
      </ul>

    </div>
  );
}

export default Dashboard;