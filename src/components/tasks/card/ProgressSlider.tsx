import { FC } from 'react';

import { ProgressSliderProps } from '@/interfaces/task.type';

const ProgressSlider: FC<ProgressSliderProps> = ({
    value,
    debounceSlider,
    handleProgressChange,
    loading,
}) => {
    return (
        <input
            type="range"
            value={value}
            min="0"
            max="100"
            step="10"
            onChange={(e) => handleProgressChange(e)}
            onMouseUp={() => debounceSlider(1000)}
            disabled={loading ? true : false}
        />
    );
};

export default ProgressSlider;
