import { motion } from "framer-motion";

function StepLayout(props)
{
    const
    {
        children,
        className,
    } = props;

    let layoutClass = "flex w-full max-w-4xl flex-col gap-6 px-6 py-6";

    if (className)
    {
        layoutClass += " ";
        layoutClass += className;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={layoutClass}
        >
            {children}
        </motion.div>
    );
}

export default StepLayout;
