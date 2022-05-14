import styles from  "./styles.module.css"

const FAQ = () =>{
    return (
      <section id="FAQ" className={styles.faq}>
            <div className="md:container mx-auto px-4">
                <div className="grid grid-cols-1">
                    <div className="heading">
                    <h2 className={styles.smallTitle}>FAQ</h2>
                    <h1 className={styles.largeTitle}>Frequently Asked <br/> Questions</h1>
                    </div>
                </div>
                <div className={` ${"dfs"} grid grid-cols-1`}>
                    <div className="">
                        <div className={styles.question}>what</div>
                        <div className={styles.answer}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis tempora sunt amet qui aperiam quasi minus voluptatibus molestias, eius rerum earum ducimus ullam laborum quisquam iusto pariatur reprehenderit expedita cum!</div>
                    </div>
                    <div className="">
                        <div className={styles.question}>what</div>
                        <div className={styles.answer}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis tempora sunt amet qui aperiam quasi minus voluptatibus molestias, eius rerum earum ducimus ullam laborum quisquam iusto pariatur reprehenderit expedita cum!</div>
                    </div>
                    <div className="">
                        <div className={styles.question}>what</div>
                        <div className={styles.answer}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis tempora sunt amet qui aperiam quasi minus voluptatibus molestias, eius rerum earum ducimus ullam laborum quisquam iusto pariatur reprehenderit expedita cum!</div>
                    </div>
                    <div className="">
                        <div className={styles.question}>what</div>
                        <div className={styles.answer}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis tempora sunt amet qui aperiam quasi minus voluptatibus molestias, eius rerum earum ducimus ullam laborum quisquam iusto pariatur reprehenderit expedita cum!</div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default FAQ;