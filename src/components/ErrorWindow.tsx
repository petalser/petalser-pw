type ErrorWindowProps = {
    isShown: boolean;
    onClose: () => void;
};

export default function ErrorWindow({ isShown, onClose }: ErrorWindowProps) {
    if (!isShown) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md border border-black rounded-t-md shadow-[4px_4px_0_#000] bg-gray-200 font-sans">
                <div className="flex items-center justify-between rounded-t-sm px-2 py-1 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-sm font-bold">
                    <span>Error</span>
                    <button
                        onClick={onClose}
                        className="w-5 h-5 bg-gray-200 border border-gray-700 flex items-center justify-center leading-none text-black cursor-pointer"
                    >
                        ×
                    </button>
                </div>

                <div className="flex items-start gap-3 p-4">
                    <div className="text-2xl">⚠️</div>
                    <p className="text-black text-sm">
                        No errors occured, everything is fine
                        <br />
                        0xC0000005
                    </p>
                </div>

                <div className="flex justify-end gap-2 px-4 py-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-1 border border-gray-700 bg-gray-100 active:translate-y-[1px] text-black cursor-pointer"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
}
