import { useMemo, useState } from "react";

function ProfileManager() {
  // Theme
  const [isDark, setIsDark] = useState(true);

  // Profile data
  const [name, setName] = useState("Kim");
  const [status, setStatus] = useState("안녕하세요!");

  // Edit mode
  const [isEditing, setIsEditing] = useState(false);

  // temp inputs (edit용)
  const [draftName, setDraftName] = useState(name);
  const [draftStatus, setDraftStatus] = useState(status);

  const isTooLong = draftStatus.length > 20;

  const themeStyle = useMemo(
    () => ({
      backgroundColor: isDark ? "#0b0b0b" : "#f7f7fb",
      color: isDark ? "rgba(255,255,255,0.92)" : "#111",
      border: "1px solid rgba(255,255,255,0.14)",
      padding: 16,
      width: 360,
      borderRadius: 12,
    }),
    [isDark],
  );

  const toggleTheme = () => setIsDark((prev) => !prev);

  const startEdit = () => {
    setDraftName(name);
    setDraftStatus(status);
    setIsEditing(true);
  };

  const save = () => {
    setName(draftName.trim() || "이름 없음");
    setStatus(draftStatus);
    setIsEditing(false);
  };

  return (
    <div style={themeStyle}>
      <h2 style={{ marginTop: 0 }}>테마 & 프로필 매니저</h2>

      {/* Theme */}
      <button onClick={toggleTheme} style={{ padding: "8px 12px" }}>
        {isDark ? "라이트 모드" : "다크 모드"}
      </button>

      <hr style={{ margin: "16px 0", opacity: 0.3 }} />

      {/* Profile */}
      {!isEditing ? (
        // ✅ 조회 모드
        <div>
          <h3 style={{ margin: "0 0 8px" }}>프로필 (조회)</h3>
          <p>
            이름: <b>{name}</b>
          </p>
          <p>상태: {status}</p>
          <button onClick={startEdit} style={{ padding: "8px 12px" }}>
            편집
          </button>
        </div>
      ) : (
        // ✅ 수정 모드
        <div>
          <h3 style={{ margin: "0 0 8px" }}>프로필 (수정)</h3>

          <div style={{ display: "grid", gap: 8 }}>
            <input
              value={draftName}
              onChange={(e) => setDraftName(e.target.value)}
              placeholder="이름"
              style={{ padding: 8 }}
            />

            <input
              value={draftStatus}
              onChange={(e) => setDraftStatus(e.target.value)}
              placeholder="상태 메시지 (20자 이내)"
              style={{
                padding: 8,
                border: isTooLong ? "2px solid red" : "1px solid #999",
              }}
            />

            <div style={{ fontSize: 12, opacity: 0.8 }}>
              글자 수: {draftStatus.length}/20{" "}
              {isTooLong && (
                <span style={{ color: "red", fontWeight: 700 }}>
                  (20자 초과!)
                </span>
              )}
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={save}
                style={{ padding: "8px 12px" }}
                disabled={draftName.trim() === ""} // 이름 비면 저장 막기(선택)
              >
                저장
              </button>
              <button
                onClick={() => setIsEditing(false)}
                style={{ padding: "8px 12px" }}
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileManager;
