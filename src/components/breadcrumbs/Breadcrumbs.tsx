export default function ({children, className, separator, hreffirst, hrefsecond, hrefthird, linkfirst, linksecond, linkthird}: breadcrumbsProps) {
    return (
        <div className={`${className} text-md font-light space-x-2`}>
            {children}
            <a className="text-neutral-500 p-2 border bg-neutral-100" href={hreffirst}>{linkfirst}</a>
            <span className="text-neutral-500">{separator}</span>
            <a className="text-neutral-500 p-2 border bg-neutral-100" href={hrefsecond}>{linksecond}</a>
            <span className="text-neutral-500">{separator}</span>
            <a href={hrefthird} className="text-neutral-500 p-2 border bg-neutral-100">{linkthird}</a>
        </div>
    );
}