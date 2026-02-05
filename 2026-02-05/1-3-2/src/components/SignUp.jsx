import { useMemo, useState } from "react";

const DUPLICATE_EMAIL = "user@test.com";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);
  const [emailResult, setEmailResult] = useState(null); // ok | dup | null
  const [emailMsg, setEmailMsg] = useState("");

  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");

  const [agree, setAgree] = useState(false);
  const [agreeTouched, setAgreeTouched] = useState(false);

  const emailValid = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()),
    [email],
  );

  const pwMatch = useMemo(() => {
    if (!pw || !pw2) return true;
    return pw === pw2;
  }, [pw, pw2]);

  const canSubmit =
    emailValid &&
    emailChecked &&
    emailResult === "ok" &&
    pw &&
    pw2 &&
    pwMatch &&
    agree;

  const onChangeEmail = (v) => {
    setEmail(v);
    setEmailChecked(false);
    setEmailResult(null);
    setEmailMsg("");
  };

  const checkEmail = () => {
    const v = email.trim();

    if (!v) {
      setEmailChecked(false);
      setEmailResult(null);
      setEmailMsg("이메일을 입력해주세요.");
      return;
    }

    if (!emailValid) {
      setEmailChecked(false);
      setEmailResult(null);
      setEmailMsg("이메일 형식이 올바르지 않습니다.");
      return;
    }

    if (v.toLowerCase() === DUPLICATE_EMAIL) {
      setEmailChecked(true);
      setEmailResult("dup");
      setEmailMsg("이미 사용 중인 이메일입니다.");
      return;
    }

    setEmailChecked(true);
    setEmailResult("ok");
    setEmailMsg("사용할 수 있는 이메일입니다.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) {
      setAgreeTouched(true);
      return;
    }
    alert("회원가입에 성공하셨습니다.");
  };

  return (
    <div className="signup">
      <form className="signup__card" onSubmit={handleSubmit}>
        <h2 className="signup__title">회원가입</h2>

        {/* 이메일 */}
        <div className="signup__row">
          <label className="signup__label">이메일</label>
          <div className="signup__email">
            <input
              className="signup__input"
              value={email}
              onChange={(e) => onChangeEmail(e.target.value)}
              placeholder="example@email.com"
            />
            <button className="signup__btn" type="button" onClick={checkEmail}>
              중복확인
            </button>
          </div>

          {!!emailMsg && (
            <p
              className={`signup__msg ${emailResult === "ok" ? "is-ok" : "is-err"}`}
            >
              {emailResult === "ok" ? "✅ " : "❌ "}
              {emailMsg}
            </p>
          )}
        </div>

        {/* 비밀번호 */}
        <div className="signup__row">
          <label className="signup__label">비밀번호</label>
          <input
            className="signup__input"
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="비밀번호"
          />
        </div>

        {/* 비밀번호 확인 */}
        <div className="signup__row">
          <label className="signup__label">비밀번호 확인</label>

          <input
            className={`signup__input
      ${pw && pw2 && !pwMatch ? "is-invalid" : ""}
      ${pw && pw2 && pwMatch ? "is-valid" : ""}
    `}
            type="password"
            value={pw2}
            onChange={(e) => setPw2(e.target.value)}
            placeholder="비밀번호 확인"
          />

          {/* 불일치 */}
          {pw && pw2 && !pwMatch && (
            <p className="signup__msg is-err">
              ❌ 비밀번호가 일치하지 않습니다.
            </p>
          )}

          {/* 일치 */}
          {pw && pw2 && pwMatch && (
            <p className="signup__msg is-ok">✅ 비밀번호가 일치합니다.</p>
          )}
        </div>

        {/* 약관 */}
        <div className="signup__row">
          <label className="signup__check">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              onBlur={() => setAgreeTouched(true)}
            />
            <span>이용약관에 동의합니다</span>
          </label>

          {!agree && agreeTouched && (
            <p className="signup__msg is-err">❌ 약관에 동의해주세요.</p>
          )}
        </div>

        <button className="signup__submit" type="submit" disabled={!canSubmit}>
          가입하기
        </button>
      </form>
    </div>
  );
}
