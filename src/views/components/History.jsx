import React, { useEffect } from 'react'
import clsx from 'clsx'
import { deleteFromHistory } from '../../utils/localStorage'
import Button from '../@/Button';
import ICON from '../../assets/icons';

export default function History({ historyTabState, historyState, setInitialRequest }) {
    const [ open, setOpen ] = historyTabState
    const [ history, setHistory ] = historyState

    function disableScroll() {
      let scrollTop = document.documentElement.scrollTop;
      let scrollLeft = document.documentElement.scrollLeft;
  
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    }
  
    useEffect(() => {
      if (open) {
        disableScroll();
      }
      else {
        window.onscroll = function () {};
      }
    }, [ open ])

  return (
    <>
      <section className={'z-40 h-screen w-screen fixed top-0 left-0 history_tab ' + clsx({ "_open" : open })}>
        <aside className="z-10 absolute right-0 sc_800:w-full min-w-[40%] h-screen max-h-screen overflow-auto border-l border-white/5 bg-[#29292a] px-2">
          <div className='w-full bg-[#29292ab6] sticky top-0 z-20 py-2 px-1 flex justify-between items-center backdrop-blur-sm'>
            <p className='space-x-2 pl-3'><span className='text-white font-medium text-3xl'>{history.length}</span><span className='text-gray-400 text-lg'>Request{history.length > 1 && "s"}</span></p>
            <Button type='button' theme="glass" onClick={() => setOpen(false)}>
              <ICON.Xmark />
            </Button>
          </div>
            
            <div className='flex flex-col gap-2 p-1'>
              {history.length > 0 ? history.map((h, index) => (
                <div className='w-full rounded-lg border border-white/5 bg-white/10 hover:bg-white/5 p-1' key={index}>
                  <p className='text-gray-300 text-sm mb-1'>{h.date || "00/00/0000 - 00:00"}</p>
                  <div className='w-full flex items-center font-medium text-white text-sm text-center gap-1 justify-between focus:ring-0 cursor-pointer'>
                    <button onClick={() => setInitialRequest(h)} className='flex gap-1 flex-grow'>
                      <div className="w-20 border rounded-lg px-4 py-2 border-white/5 bg-white/5 hover:bg-white/5 focus:ring-0">
                        { h.method }
                      </div>
                      <div className="flex-grow border px-4 py-2 rounded-lg border-white/5 bg-white/5 hover:bg-white/5 focus:ring-0">
                        { h.url }
                      </div>
                    </button>
                    <Button
                    type="button"
                      className="border border-red-500/50 bg-red-800/20 hover:bg-red-800/50 px-4 py-2" title="Delete"
                      onClick={() => deleteFromHistory(h, setHistory)}
                    >
                      <ICON.Delete />
                    </Button>
                  </div>
                </div>
              )) : <p className='px-4 py-2 text-gray-400 font-medium text-lg text-center'>Nothing in history !!</p>}
            </div>
        </aside>

        <div className='absolute z-0 inset-0 backdrop-blur-sm bg-gray-400/5 top-0 left-0 blure_layer'></div>
      </section>
    </>
  )
}
