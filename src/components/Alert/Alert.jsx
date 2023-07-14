import cn from 'classnames'

export const Alert = ({ children, type }) => {
    return (
        <div className={
            cn('alert', {
                [type === 'primary']: 'alert-primary',
                [type === 'success']: 'alert-success',
                [type === 'danger']: 'alert-danger',
            })
        } >
            {children}
        </div>

    );
}

