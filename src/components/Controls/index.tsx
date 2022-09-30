import React from 'react'

export type ControlsProps = {
  level: number
  setLevel: (level: number) => void
  visible: boolean
  setVisible: (visible: boolean) => void
}

export const Controls = ({
  level,
  setLevel,
  visible,
  setVisible,
}: ControlsProps) => (
  <div className="fixed right-4 bottom-4 z-50 flex flex-col space-y-2">
    <div className="rounded-md w-10 h-10 flex flex-col">
      <button
        className="rounded-md w-10 h-10 flex-1 text-2xl bg-slate-800 hover:bg-slate-700 disabled:bg-slate-500 text-slate-100 disabled:text-slate-300 justify-center items-center flex"
        type="button"
        onClick={() => setVisible(!visible)}
      >
        {!visible && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path
              fillRule="evenodd"
              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {visible && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
          </svg>
        )}
      </button>
    </div>
    <div className="rounded-md w-10 h-20 flex flex-col overflow-hidden">
      <button
        className="flex-1 text-2xl bg-slate-800 hover:bg-slate-700 disabled:bg-slate-500 text-slate-100 disabled:text-slate-300 justify-center items-center flex"
        type="button"
        onClick={() => setLevel(level + 1)}
        disabled={level === 8}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        className="flex-1 text-2xl bg-slate-800 hover:bg-slate-700 disabled:bg-slate-500 text-slate-100 disabled:text-slate-300 justify-center items-center flex"
        type="button"
        onClick={() => setLevel(level - 1)}
        disabled={level === 0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
)
