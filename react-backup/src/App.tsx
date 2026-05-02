import { useState } from 'react';
import ModeSelection from './components/ModeSelection';
import GUIMode from './components/GUI/GUIMode';
import TerminalMode from './components/Terminal/TerminalMode';

type AppMode = 'selection' | 'gui' | 'terminal';

function App() {
  const [mode, setMode] = useState<AppMode>('selection');

  return (
    <>
      {mode === 'selection' && <ModeSelection onSelectMode={setMode} />}
      {mode === 'gui' && <GUIMode onSwitchMode={() => setMode('terminal')} />}
      {mode === 'terminal' && <TerminalMode onSwitchMode={() => setMode('gui')} />}
    </>
  );
}

export default App;
