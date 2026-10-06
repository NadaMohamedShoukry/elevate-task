import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "react-router";

export function PostsPagination({ totalPages }) {
  const [searchParams, setsearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") ?? 1);
  const firstPage = Math.max(1, Math.min(currentPage, totalPages - 3));
  const secondPage = firstPage + 1;
  const thirdPage = firstPage + 2;
  const handlePageSearchParams = (page) => {
    setsearchParams((param) => {
      param.set("page", String(page));
      return param;
    });
  };
  if (totalPages < 1) return null;
  return (
    <Pagination className="bg-white py-6 px-2.5 h-20">
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageSearchParams(1);
            }}
          >
            &lt;&lt;
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) {
                handlePageSearchParams(currentPage - 1);
              }
            }}
          />
        </PaginationItem>
        {totalPages >= 1 && (
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={currentPage === firstPage}
              onClick={(e) => {
                e.preventDefault();
                handlePageSearchParams(firstPage);
              }}
              className="hover:bg-[#2F80ED] hover:rounded-full hover:text-white
            data-[active=true]:bg-[#2F80ED] data-[active=true]:rounded-full data-[active=true]:text-white "
            >
              {firstPage}
            </PaginationLink>
          </PaginationItem>
        )}
        {totalPages >= 2 && (
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={currentPage === secondPage}
              onClick={(e) => {
                e.preventDefault();
                handlePageSearchParams(secondPage);
              }}
              className="hover:bg-[#2F80ED] hover:rounded-full hover:text-white
            data-[active=true]:bg-[#2F80ED] data-[active=true]:rounded-full data-[active=true]:text-white "
            >
              {secondPage}
            </PaginationLink>
          </PaginationItem>
        )}
        {totalPages >= 3 && (
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={currentPage === thirdPage}
              onClick={(e) => {
                e.preventDefault();
                handlePageSearchParams(thirdPage);
              }}
              className="hover:bg-[#2F80ED] hover:rounded-full hover:text-white
            data-[active=true]:bg-[#2F80ED] data-[active=true]:rounded-full data-[active=true]:text-white "
            >
              {thirdPage}
            </PaginationLink>
          </PaginationItem>
        )}
        {totalPages > 3 && currentPage <= totalPages - 4 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* {currentPage > 3 && currentPage < totalPages && (
          <PaginationItem>
            <PaginationLink href="#" isActive={currentPage}>
              {currentPage}
            </PaginationLink>
          </PaginationItem>
        )} */}
        {totalPages > 3 && (
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={currentPage === totalPages}
              onClick={(e) => {
                e.preventDefault();
                handlePageSearchParams(totalPages);
              }}
              className="hover:bg-[#2F80ED] hover:rounded-full hover:text-white
            data-[active=true]:bg-[#2F80ED] data-[active=true]:rounded-full data-[active=true]:text-white "
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) {
                handlePageSearchParams(currentPage + 1);
              }
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageSearchParams(totalPages);
            }}
          >
            &gt;&gt;
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
